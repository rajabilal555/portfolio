import React, { ReactPropTypes } from "react";

export default function HeaderText({
    className,
    children,
    ...props
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <span
            {...props}
            className={
                "text-white hover:bg-[length:100%_100%] bg-[length:0%_100%] px-[4px] bg-left bg-gradient-to-r from-primary/60 to-primary/60 bg-no-repeat transition-all duration-400 ease-in-out " +
                className
            }
        >
            {children}
        </span>
    );
}
