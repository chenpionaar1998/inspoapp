export const getPlanIDFromURL = (): string => {
    if (window
        && "location" in window
        && "protocol" in window.location
        && "pathname" in window.location
        && "host" in window.location) {
            let URL = window.location.pathname;
            return URL.substring(6);
        };

    return "";
} 