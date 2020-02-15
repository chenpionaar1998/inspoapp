export const trimTimeString = (str: string): string => {
    return str.substring(0,10);
}

export const mapTimeToString = (str: string): string => {
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    if (str) {
        let month = months[parseInt(str.slice(5,7))-1];
        let year = str.slice(0,4);

        return month + "-" + year
    }

    return "";
}