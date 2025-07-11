import { PYObject } from "./pyobject.ts";

export class PYNumber extends PYObject {
    num: number = 0;
    constructor(value: number | string) {
        super();
        this.num = Number(value);
    }
    __add__(otherobj: PYNumber)  {
        return this.num + otherobj.num;
    }
    __sub__(otherobj: PYNumber) {
        return this.num - otherobj.num;
    }
    __mul__(otherobj: PYNumber) {
        return this.num * otherobj.num;
    }
    __addself__(otherobj: PYNumber) : this {
        this.num = this.__add__(otherobj)
        return this
    }
}