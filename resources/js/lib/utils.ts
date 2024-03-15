import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function limitString(str: string, limit: number) {
    return str.length > limit ? str.slice(0, limit).concat("...") : str;
}
