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

export function randomBackgroundPattern() {
    const patterns = [
        "pattern-wavy",
        // "pattern-dots",
        // "pattern-paper",
        "pattern-triangles",
        "pattern-zigzag-3d",
        "pattern-isometric",
    ];
    return cn("pattern-bg-background pattern-gray-500 pattern-opacity-20 pattern-size-10", patterns[Math.floor(Math.random() * patterns.length)]);
}
