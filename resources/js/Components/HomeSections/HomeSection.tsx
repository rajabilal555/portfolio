import { cn } from "@/lib/utils";
import React from "react";

export default function HomeSection({
    title,
    className,
    children,
}: {
    title: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "mb-6 transition-all duration-300 ease-in-out group/section",
                className
            )}
        >
            <div className="mb-6">
                <span
                    className={
                        "text-xl font-[600] text-white " +
                        "text-white group-hover/section:bg-[length:100%_100%] bg-[length:0%_100%] px-[4px] bg-left bg-gradient-to-r from-primary/60 to-primary/60 bg-no-repeat transition-all duration-400 ease-in-out "
                    }
                >
                    {title}
                </span>
            </div>
            {children}
        </div>
    );
}
