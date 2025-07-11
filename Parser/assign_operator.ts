// Gimme a single line and i'll see what it is
import { Tokens, tokenize_line } from "./tokenizer.ts";
import { PYBytecode, PYBytecodeType } from "../Python/python_bytecode.ts";
import { get_value_type } from "../utils.ts"
export function get_assign_operator(tokens: Tokens): PYBytecode | undefined {
    const name = tokens[0]
    let val = tokens[2];
    const type = get_value_type(val)
    if (type == "STRING") {
        val = val.substring(1, val.length - 1)
    }
    switch (tokens[1]) {
        case "+=":
            return new PYBytecode(PYBytecodeType.ADD_SELF, [name, val])
    }
    /*
    if (isNaN(Number(name))) {
        // its a token
        if (tokens[1] != "=")
            return;
        let val = tokens[2];
        const type = get_value_type(val)
        if (type == "STRING") {
            val = val.substring(1, val.length - 1)
        }
        return new PYBytecode([name, type, val])
    }
    */
    return;
}
export function evaluate_line(str: string) {
    const tokens: Tokens = tokenize_line(str)
    console.log(tokens)
    return get_assign_operator(tokens)
}