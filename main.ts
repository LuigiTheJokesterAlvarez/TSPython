import testfile from "./test.py" with {type: "text"}
import { PY_AST } from "./Python/python_ast.ts";
const myast = new PY_AST;

myast.compile_str(testfile)
myast.execute()

console.log(myast)