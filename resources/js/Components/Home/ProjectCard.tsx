import {cn, limitString, randomBackgroundPattern} from "@/lib/utils";
import {Link} from "@inertiajs/react";
import OutlineButton from "../Buttons/OutlineButton";
import {PortfolioProject} from "@/types";
import Markdown from "react-markdown";
import {mdC, mdExperienceList, mdPrimaryStrong} from "@/lib/markdown-utils";
import DynamicFAIcon from "@/Components/Icons/DynamicFAIcons";

export default function ProjectCard({
                                        project,
                                        className = "",
                                    }: {
    project: PortfolioProject,
    className?: string,
}) {
    return (
        <div
            className={cn(
                "relative flex flex-row items-center border border-gray-700 rounded-md shadow break-inside-avoid-column min-h-52 h-full w-full transition-all hover:scale-[102%]",
                className,
                {
                    "bg-center bg-no-repeat bg-cover bg-blend-multiply bg-black/95": project.image_url,
                    "bg-primary/5": !project.image_url,
                }
            )}
            style={{backgroundImage: project.image_url && `url(/storage/${project.image_url})`}}
        >
            {
                !project.image_url &&
                <div
                    className={cn("-z-50 absolute bottom-0 inset-0 pointer-events-none top-0",
                        randomBackgroundPattern())}></div>
            }

            <div
                className="flex items-center h-full w-full justify-center gap-4 p-6 rounded-md ">
                {project.image_url && (
                    <div className="w-24 min-w-24 aspect-square">
                        <img
                            src={`/storage/${project.image_url}`}
                            alt="Project Image"
                            className="object-cover w-full h-full rounded-md "
                        />
                    </div>
                )}
                <div className="flex flex-col items-stretch h-full">
                    <div className="flex flex-col flex-1 h-full">
                        <h3 className="text-lg font-[600] text-white">
                            {project.title}
                        </h3>
                        <Markdown className="text-sm text-foreground h-full overflow-ellipsis"
                                  components={mdC([mdExperienceList, mdPrimaryStrong,])}>
                            {limitString(project.short_description, 400)}
                        </Markdown>
                    </div>
                    {project.actions.length > 0 && (
                        <div className="flex gap-2 mt-4 mb-2 items-end justify-end">
                            {project.actions.map((action) => (
                                <a
                                    key={action.url}
                                    href={action.url}
                                    target="_blank"
                                    className="text-primary"
                                >
                                    <OutlineButton>
                                        {action.icon && (
                                            <DynamicFAIcon icon={action.icon} size="12"/>
                                        )}
                                        {action.name}
                                    </OutlineButton>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
