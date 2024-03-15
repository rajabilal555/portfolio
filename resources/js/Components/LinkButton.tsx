import { InertiaLinkProps, Link } from "@inertiajs/react";
import { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";

export default function LinkButton({
    className = "",
    disabled,
    children,
    ...props
}: InertiaLinkProps & { disabled?: boolean } & ButtonHTMLAttributes<
        HTMLButtonElement | HTMLAnchorElement | HTMLAnchorElement
    >) {
    return (
        <Link
            {...props}
            className={
                `inline-flex gap-2 items-center justify-center py-1 px-3 rounded-md font-semibold text-xs text-primary-100 uppercase tracking-wide active:bg-primary-800/80 focus:outline-none transition ease-in-out duration-100 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </Link>
    );
}
