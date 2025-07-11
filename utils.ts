export function get_value_type(val: string): string {
    let type = "NUMBER"
    if (val.startsWith('"') && val.endsWith('"'))
        type = "STRING"
    return type;
}
export function deleteSpaces(str: string): string {
   return str.replace(/\s/g, "");
}