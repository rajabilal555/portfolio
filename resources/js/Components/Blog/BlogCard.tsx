import {cn, limitString} from "@/lib/utils";
import {Link} from "@inertiajs/react";

export default function BlogCard({
                                     name,
                                     description,
                                     image,
                                     link,
                                     className = "",
                                 }: {
    name: string;
    description: string;
    image?: string;
    link?: string;
    className?: string;
}) {
    return (
        <Link href={link ?? '#'} className="text-primary">
            <div
                className={cn(
                    "flex flex-row items-start gap-4 p-6 rounded-md transition-all bg-card hover:scale-[102%]",
                    className
                )}
            >
                {image && (
                    <div className="h-full aspect-square ">
                        <img
                            src={image}
                            alt="Blog Image"
                            className="object-cover w-full h-full rounded-md"
                        />
                    </div>
                )}
                <div className="flex items-stretch h-full">
                    <div className="flex flex-col items-stretch h-full">
                        <div className="flex flex-col flex-1">
                            <h3 className="text-lg font-[600] text-white">
                                {name}
                            </h3>
                            <p className="text-sm text-ellipsis text-foreground">
                                {limitString(description, 150)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
