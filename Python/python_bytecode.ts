export enum PYBytecodeType {
    MAKE_VARIABLE,
    ADD_SELF
}
export class PYBytecode {
    type: PYBytecodeType = 0
    data: Array<any> = []
    constructor(type: PYBytecodeType, dater: any[]) {
        this.type = type
        this.data = dater
    }
}