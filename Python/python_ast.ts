import { Dict } from "../dict.ts"
import { analyze_line } from "../Parser/semantic_analysis.ts";
import { PYBytecode } from "./python_bytecode.ts";
import { PY_VM } from "./python_vm.ts";
export class PY_AST {
    Codes: Array<PYBytecode> = []
    VM: PY_VM = new PY_VM
    compile_str(str: string) {
        const lines = str.split('\n')
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i]
            const analyzed = analyze_line(line)
            if (analyzed) {
                this.Codes.push(analyzed[0])
            }
        }
    }
    execute() {
        for (const code of this.Codes) {
            this.VM.RunBytecode(code)
        }
    }
}