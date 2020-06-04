// Libraries
import moment from 'moment'

// Returns in format Wed, Jun 3, 2020 9:10 PM
export const getCurrentTime = (): string => {
    return moment().format('llll');
}

// Returns in format 2020-06-03T21:10:22+08:00
export const getCurrentDate = (): string => {
    return moment().format();
}