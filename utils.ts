export function get_value_type(val: string): string {
    let type = "INT"
    if (val.startsWith('"') && val.endsWith('"')) {
        type = "STRING"
    } else if (val.includes(".")) {
        type = "FLOAT"
    }
    return type;
}
export function deleteSpaces(str: string): string {
   return str.replace(/\s/g, "");
}