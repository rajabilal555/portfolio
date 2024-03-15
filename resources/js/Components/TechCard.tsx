import { cn } from "@/lib/utils";
import { ReactTyped } from "react-typed";

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
            className={cn(
                "group flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-md bg-card  shadow-sm text-secondary-container-foreground transition-all hover:scale-[105%]",
                className
            )}
        >
            <img
                className="transition-all grayscale contrast-150 group-hover/section:grayscale-0"
                src={`https://skillicons.dev/icons?i=${tech}`}
            />
            <ReactTyped
                startWhenVisible
                strings={[techName ?? tech]}
                typeSpeed={60}
                // showCursor={false}
                loop={true}
                cursorChar=""
                backDelay={3000}
                className="capitalize transition-all group-hover:text-white group-hover:[text-shadow:_0_0_10px_#fff,_0_0_20px_#fff] h-6"
            />
        </div>
    );
}
