export class PYStack {
    // deno-lint-ignore no-explicit-any
    ConstantPool: Array<any> = []
    ConstantMap: Record<string, number> = {};
    make_variable(name: string, type: string, val: any): number {
        switch (type) {
            case "INT":
                val = BigInt(val)
            break
            case "FLOAT":
                val = Number(val)
            break
            case "STRING":
                val = String(val)
            break
        }
        const l = this.ConstantPool.push(val) - 1
        this.ConstantMap[name] = l
        return l
    }
}