import {PYStack} from "./python_stack.ts"
import { PYBytecode } from "./python_bytecode.ts";
export class PY_VM {
    Stack: PYStack = new PYStack;
    STORE_VAR(name: string, type: string, val: any): number {
        const ind = this.Stack.make_variable(name, type, val) // Tell the stack to add a const to the pool
        return ind
    }
    RunBytecode(ByteCodeResult: Array<any>) {
        switch (ByteCodeResult[0]) {
            case PYBytecode.MAKE_VARIABLE:
                this.STORE_VAR(ByteCodeResult[1], ByteCodeResult[2], ByteCodeResult[3])
            break
        }
    }
}