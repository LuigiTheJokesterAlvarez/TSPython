import {PYStack} from "./python_stack.ts"
import { PYBytecode, PYBytecodeType } from "./python_bytecode.ts";
export class PY_VM {
    Stack: PYStack = new PYStack;
    STORE_VAR(name: string, type: string, val: any): number {
        const ind = this.Stack.make_variable(name, type, val) // Tell the stack to add a const to the pool
        return ind
    }
    RunBytecode(ByteCodeResult: PYBytecode) {
        switch (ByteCodeResult.type) {
            case PYBytecodeType.MAKE_VARIABLE:
                this.STORE_VAR(ByteCodeResult.data[0], ByteCodeResult.data[1], ByteCodeResult.data[2])
            break
        }
    }
}