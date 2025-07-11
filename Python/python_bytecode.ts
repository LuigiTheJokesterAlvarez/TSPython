export enum PYBytecodeType {
    MAKE_VARIABLE
}
export class PYBytecode {
    type: PYBytecodeType = 0
    data: Array<any> = []
    constructor(dater: any[]) {
        this.data = dater
    }
}