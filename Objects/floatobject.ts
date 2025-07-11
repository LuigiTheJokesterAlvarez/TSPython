import {PYObject} from "./pyobject.ts"
class PYFloat extends PYObject {
    num: number = 0;
    constructor(value: number | string) {
        super();
        this.num = Number(value);
    }
    __add__(otherobj: PYFloat)  {
        return this.num + otherobj.num;
    }
    __sub__(otherobj: PYFloat) {
        return this.num - otherobj.num;
    }
    __mul__(otherobj: PYFloat) {
        return this.num * otherobj.num;
    }
    __addself__(otherobj: PYFloat) : this {
        this.num = this.__add__(otherobj)
        return this
    }
}