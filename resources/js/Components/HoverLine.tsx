import React, { ReactPropTypes } from "react";

export default function HoverLine({
    className,
    childClassName,
    children,
    ...props
}: {
    className?: string;
    childClassName?: string;
    children: React.ReactNode;
}) {
    return (
        <span
            {...props}
            className={
                "group transition-all duration-300 ease-in-out text-white " +
                className
            }
        >
            <span
                className={
                    "group-hover:bg-[length:100%_2px] bg-[length:0%_2px] pb-[2px] bg-left-bottom bg-gradient-to-r from-primary to-primary bg-no-repeat transition-all duration-400 ease-in-out " +
                    childClassName
                }
            >
                {children}
            </span>
        </span>
    );
}
