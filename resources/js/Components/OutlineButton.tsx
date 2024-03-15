import { ButtonHTMLAttributes } from 'react';

export default function OutlineButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex gap-2 items-center px-2 py-1 border-1 border-primary-container border rounded-md font-semibold text-xs text-primary-100 uppercase tracking-wide hover:bg-primary-600/40 active:bg-primary-800/80 focus:outline-none transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
