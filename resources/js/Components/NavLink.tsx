import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}: InertiaLinkProps & { active?: boolean }) {
    return (
        <Link
            {...props}
            className={
                "group transition-all duration-300 ease-in-out text-white " + className
            }
        >
            <span
                className={
                    (active ? "bg-[length:40%_2px] " : "") +
                    "group-hover:bg-[length:100%_2px] bg-[length:0%_2px] pb-[2px] bg-left-bottom bg-gradient-to-r from-primary to-primary bg-no-repeat transition-all duration-400 ease-in-out"
                }
            >
                {children}
            </span>
        </Link>
    );
}
