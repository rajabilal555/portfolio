import { cn } from "@/lib/utils";

export default function Divider({ className = "" }: { className?: string }) {
    //   return <hr className="h-px my-8 bg-gray-400 border-0"></hr>;
    return (
        <hr
            className={cn(
                "h-0.5 mx-8 my-6 border-0 rounded bg-primary-700",
                className
            )}
        ></hr>
    );
}
