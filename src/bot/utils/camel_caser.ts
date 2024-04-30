export async function snakeToCamel(str: string) {
    const converted: string = str.replace(/_[a-z]/g, (match) => {
        return match[1].toUpperCase();
    });

    return converted;
}
