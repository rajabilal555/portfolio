import {cn, limitString} from "@/lib/utils";
import {Link} from "@inertiajs/react";
import OutlineButton from "../Buttons/OutlineButton";
import {PortfolioProject} from "@/types";
import Markdown from "react-markdown";
import {mdC, mdExperienceList, mdPrimaryStrong} from "@/lib/markdown-utils";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import DynamicFAIcon from "@/Components/Icons/DynamicFAIcons";

export default function ProjectCard({
                                        project,
                                        className = "",
                                    }: {
    project: PortfolioProject,
    className?: string,
}) {
    // return (
    //     <Link href={'#'} className="text-primary">
    //         <div
    //             className={cn(
    //                 "flex flex-row items-start gap-4 p-6 rounded-md h-48 transition-all bg-card hover:scale-[102%]",
    //                 className
    //             )}
    //         >
    //             {project.image_url && (
    //                 <div className="h-full aspect-square ">
    //                     <img
    //                         src={`/storage/${project.image_url}`}
    //                         alt="Project Image"
    //                         className="object-cover w-full h-full rounded-md"
    //                     />
    //                 </div>
    //             )}
    //             <div className="flex items-stretch h-full">
    //                 <div className="flex flex-col items-stretch h-full">
    //                     <div className="flex flex-col flex-1">
    //                         <h3 className="text-lg font-[600] text-white">
    //                             {project.title}
    //                         </h3>
    //                         <Markdown className="text-sm text-ellipsis text-foreground" components={mdC([
    //                             mdExperienceList,
    //                             mdPrimaryStrong,
    //                         ])}>
    //                             {limitString(project.short_description, 400)}
    //                         </Markdown>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </Link>
    // );


    return (
        <div
            className={cn(
                "flex flex-col items-center bg-top bg-no-repeat bg-cover border border-gray-700 rounded-md shadow bg-blend-multiply md:flex-row break-inside-avoid-column min-h-52 h-full w-full transition-all bg-card hover:scale-[102%]",
                className
            )}
            style={{backgroundImage: `url(/storage/${project.image_url})`}}
        >

            {/*{project.image_url && (*/}
            {/*    <div className="h-full aspect-square">*/}
            {/*        <img*/}
            {/*            src={`/storage/${project.image_url}`}*/}
            {/*            alt="Project Image"*/}
            {/*            className="object-cover w-full h-full rounded-md "*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*)}*/}
            <div
                className="flex items-stretch h-full p-4">
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
                        <div className="flex gap-2 my-2">
                            {project.actions.map((action) => (
                                <Link
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
                                </Link>
                            ))}
                            {/*<Link href={link} className="text-primary">*/}
                            {/*    <OutlineButton>View Project</OutlineButton>*/}
                            {/*</Link>*/}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
