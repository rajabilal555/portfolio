import {ButtonHTMLAttributes} from 'react';
import {cn} from "@/lib/utils";

export default function PrimaryButton({
                                          className = '',
                                          disabled,
                                          children,
                                          ...props
                                      }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                cn(
                    "inline-flex gap-2 items-center px-3 py-1 bg-primary-container border border-transparent rounded-md font-semibold text-xs text-primary-container-foreground uppercase tracking-widest hover:bg-primary-600 active:bg-primary-800 focus:outline-none transition ease-in-out duration-150",
                    {
                        "opacity-25": disabled,
                    },
                    className
                )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
