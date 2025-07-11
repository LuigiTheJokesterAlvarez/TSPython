import {PYObject} from "./pyobject.ts"
export class PYInt extends PYObject {
    num: bigint = 0n;
    constructor(value: bigint | number | string) {
        super();
        this.num = BigInt(value);
    }
    __add__(otherobj: PYInt)  {
        return this.num + otherobj.num;
    }
    __sub__(otherobj: PYInt) {
        return this.num - otherobj.num;
    }
    __mul__(otherobj: PYInt) {
        return this.num * otherobj.num;
    }
    __addself__(otherobj: PYInt) : this {
        this.num = this.__add__(otherobj)
        return this
    }
}
/*
x += 2 should work like this
temp_int = PYInt(2)
x.__addself__(temp_int)
*/