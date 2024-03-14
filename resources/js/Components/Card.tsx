import { HTMLAttributes } from "react";

export default function Card({
    className = "",
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={
                `items-center p-8 mb-6 rounded-lg bg-[#171819] border-primary-800 shadow-primary-400/40 hover:shadow-primary-600/60 shadow transition duration-300 border ` +
                className
            }
        >
            {children}
        </div>
    );
}
