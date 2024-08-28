import {clsx, type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function limitString(str: string, limit: number) {
    return str.length > limit ? str.slice(0, limit).concat("...") : str;
}

export const appName = import.meta.env.VITE_APP_NAME || 'Bilal Pervez';

export function generatePageTitle(title: string) {
    return title + " | " + appName;
}

export function formatExperienceDate(date?: Date) {
    if (date == null) {
        return "PRESENT";
    }
    return dayjs(date).format('MMM YYYY');
}
