import React from 'react';
import OutlineButton from '../Buttons/OutlineButton';
import {PortfolioProject} from '@/types';
import DynamicFAIcon from "@/Components/Icons/DynamicFAIcons";
import {mdC, mdExperienceList, mdPrimaryStrong} from "@/lib/markdown-utils";
import Markdown from "react-markdown";

interface ProjectDetailsModalProps {
    project: PortfolioProject;
}

const ProjectDetailsModal = React.forwardRef<HTMLDivElement, ProjectDetailsModalProps>(
    ({project, ...props}, ref) => (
        <div {...props} ref={ref} className="text-gray-300 grid gap-4">
            {/* Project Image */}
            {project.image_url && (
                <img
                    src={`/storage/${project.image_url}`}
                    alt={`${project.title} Image`}
                    className="w-full h-48 object-cover rounded-md"
                />
            )}
            <div className="flex flex-wrap gap-2">
                {/* Project Tags */}
                {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-primary-container text-primary rounded-md px-2 py-1">
                        {tag}
                    </span>
                ))}
            </div>
            <Markdown className="text-sm text-foreground h-full overflow-ellipsis"
                      components={mdC([mdExperienceList, mdPrimaryStrong])}>
                {project.description}
            </Markdown>

            {/* Project Actions */}
            {project.actions.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.actions.map((action, index) => (
                        <a
                            key={index}
                            href={action.url}
                            target="_blank"
                        >
                            <OutlineButton>
                                {action.icon && <DynamicFAIcon icon={action.icon} size="12"/>}
                                {action.name}
                            </OutlineButton>
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
);

export default ProjectDetailsModal;
