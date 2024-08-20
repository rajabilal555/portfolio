import {cn} from "@/lib/utils";

export default function PageTitle({
                                      className = "",
                                      children,
                                      ...props
                                  }: React.HTMLProps<HTMLHeadingElement>) {
    return (
        <h1
            className={cn("flex items-end gap-2 text-2xl font-medium text-white", className)}
            {...props}
        >
            {children}
        </h1>
    );
}
