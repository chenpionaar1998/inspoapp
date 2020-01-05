export const isTrue = (str: string): boolean => {
    return str === "true";
}

export const capitalize = (str: string): string => {
    return str.length ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}