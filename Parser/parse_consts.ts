// Gimme a single line and i'll see what it is
import { Tokens, tokenize_line } from "./tokenizer.ts";
import { PYBytecode } from "../Python/python_bytecode.ts";
import { get_value_type } from "../utils.ts"
export function get_const(tokens: Tokens): Array<any> {
    const name = tokens[0]
    if (isNaN(Number(name))) {
        // its a token
        const val = tokens[2];
        const type = get_value_type(val)
        return [PYBytecode.MAKE_VARIABLE, name, type, val]
    }
    return [-1]
}
export function evaluate_line(str: string) {
    const tokens: Tokens = tokenize_line(str)
    console.log(tokens)
    return get_const(tokens)
}