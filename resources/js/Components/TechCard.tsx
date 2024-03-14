import { InertiaLinkProps } from "@inertiajs/react";

export default function TechCard({
    tech,
    techName,
    className = "",
}: {
    className?: string;
    tech: string;
    techName?: string;
}) {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-md bg-tertiary-container text-tertiary-container-foreground ${className}`}
        >
            <img
                // className="grayscale contrast-150"
                src={` https://skillicons.dev/icons?i=${tech}`}
            />
            <span className="font-semibold capitalize">{techName ?? tech}</span>
        </div>
    );
}
