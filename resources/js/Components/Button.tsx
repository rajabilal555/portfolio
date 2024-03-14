import { ButtonHTMLAttributes } from "react";

export default function Button({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex gap-2 items-center px-2 py-1 bg-primary-container border border-transparent rounded-md font-semibold text-xs text-primary-container-foreground uppercase tracking-widest hover:bg-primary-600 active:bg-primary-800 focus:outline-none transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
