import { PYFloat } from "../Objects/floatobject.ts";
import { PYInt } from "../Objects/intobject.ts";

export class PYStack {
    // deno-lint-ignore no-explicit-any
    ConstantPool: Array<any> = []
    ConstantMap: Record<string, number> = {};
    make_variable(name: string, type: string, val: any): number {
        switch (type) {
            case "INT":
                val = new PYInt(val)
            break
            case "FLOAT":
                val = new PYFloat(val)
            break
            case "STRING":
                val = String(val)
            break
        }
        const l = this.ConstantPool.push(val) - 1
        this.ConstantMap[name] = l
        return l
    }
    get_variable(name: string) {
        return this.ConstantPool[this.ConstantMap[name]]
    }
}