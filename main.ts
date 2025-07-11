import { PY_VM } from "./Python/python_vm.ts"
import { tokenize_line } from "./Parser/tokenizer.ts";
import { analyze_line } from "./Parser/semantic_analysis.ts";

const myvm = new PY_VM;

myvm.RunBytecode(analyze_line("BUDDY = 2")[0])
console.log(myvm)