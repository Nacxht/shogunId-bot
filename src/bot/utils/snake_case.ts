export async function camelToSnake(str: string) {
    const result = str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

    return result;
}
