enum TokenizeMode {
    Normal,
    String
}
export type Tokens = Array<string>;
export function tokenize_line(line: string): Tokens {
    let mode = TokenizeMode.Normal
    const tokens: Tokens = []
    let current_token = ""
    let add_char: boolean = false

    function push_token() {
        tokens.push(current_token)
        current_token = ""
        add_char = false
    }

    for (const c of line) {
        add_char = true
        switch (c) {
            case " ": 
                switch (mode) {
                    case TokenizeMode.Normal:
                        push_token()
                    break
                }
            break
            case '"':
                switch (mode) {
                    case TokenizeMode.Normal:
                        if (current_token != "")
                            push_token()
                        mode = TokenizeMode.String
                    break
                    case TokenizeMode.String:
                        current_token = '"'.concat(current_token.substring(1, current_token.length)).concat('"')
                        push_token()
                        mode = TokenizeMode.Normal
                    break
                }
            break
        }
        if (add_char) {
            current_token += c
        }
    }

    if (current_token != "") {
        tokens.push(current_token)
    }
    return tokens
}