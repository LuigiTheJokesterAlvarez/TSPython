import { PYBytecode } from "../Python/python_bytecode.ts";
import * as parse_consts from "./parse_consts.ts"

const analysis = [
    {
        "module": parse_consts,
        "name": "parse_consts.ts"
    }
]

export function analyze_line(str: string): Array<PYBytecode> {
    let ind = 0;
    let results: Array<PYBytecode> = []
    for (const analyzer of analysis) {
        try {
            const module = analyzer.module;
            if (module && typeof module.evaluate_line === 'function') {
                const result = module.evaluate_line(str);
                if (result)
                    results.push(result)
                console.log(`Analyzing ${++ind}/${analysis.length} ${analyzer.name}`)
            } else {
                console.error(`evaluate_func not found in ${analyzer.name}`);
            }
        } catch (error) {
            console.error(`Failed to import ${analyzer.name}:`, error);
        }
    }
    return results
}
