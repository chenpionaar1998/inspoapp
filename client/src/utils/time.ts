// Libraries
import moment from 'moment'

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

export const withInRange = (start: string, end: string, date: Date) => {
    let startDate = new Date(start);
    let endDate = new Date(end);

    return startDate <= date && date <= endDate;
}

export const getNextDate = (date: string): string => {
    // Very sketchy solution
    let day = new Date(date)
    const [d, m, y] = [day.getDate(), day.getMonth(), day.getFullYear()]
    return (m+1) < 10 ? y + "-0" + (m+1) + "-" + d : y + "-" + (m+1) + "-" + d
}

// Returns in format Wed, Jun 3, 2020 9:10 PM
export const getCurrentTime = (): string => {
    return moment().format('llll');
}

// Returns in format 2020-06-03T21:10:22+08:00
export const getCurrentDate = (): string => {
    return moment().format();
}