import {PYStack} from "./python_stack.ts"
import { PYBytecode, PYBytecodeType } from "./python_bytecode.ts";
import { deleteSpaces } from "../utils.ts";
import { PYNumber } from "../Objects/numberobject.ts";
export class PY_VM {
    Stack: PYStack = new PYStack;
    STORE_VAR(name: string, type: string, val: any): number {
        const ind = this.Stack.make_variable(name, type, val) // Tell the stack to add a const to the pool
        return ind
    }
    ADD_SELF(name: string, otherobj: string) {
        const variable = this.Stack.get_variable(name)
        switch (true) {
            case variable instanceof PYNumber:
                // if the other object is a variable
                if (deleteSpaces(otherobj) in this.Stack.ConstantMap) {
                    const othervar = this.Stack.get_variable(deleteSpaces(otherobj))
                    variable.__addself__(othervar)
                } else {
                    const Temp_Obj = new PYNumber(otherobj)
                    variable.__addself__(Temp_Obj)
                }
                break
        }
    }
    RunBytecode(ByteCodeResult: PYBytecode) {
        switch (ByteCodeResult.type) {
            case PYBytecodeType.MAKE_VARIABLE:
                this.STORE_VAR(ByteCodeResult.data[0], ByteCodeResult.data[1], ByteCodeResult.data[2])
            break
            case PYBytecodeType.ADD_SELF:
                this.ADD_SELF(ByteCodeResult.data[0], ByteCodeResult.data[1]);
            break
        }
    }
}