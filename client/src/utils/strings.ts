export const isTrue = (str: string): boolean => {
    return str === "true";
}

export const capitalize = (str: string): string => {
    return str.length ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}

export const trimTimeString = (str: string): string => {
    return str.substring(0,10);
}