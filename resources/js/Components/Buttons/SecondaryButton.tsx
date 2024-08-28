import {ButtonHTMLAttributes} from 'react';

export default function SecondaryButton({
                                            type = 'button',
                                            className = '',
                                            disabled,
                                            children,
                                            ...props
                                        }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex gap-2 items-center px-2 py-1 bg-secondary-container border border-transparent rounded-md font-semibold text-xs text-primary-container-foreground uppercase tracking-widest shadow-sm hover:bg-primary-600/80 active:bg-primary-800 focus:outline-none disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
