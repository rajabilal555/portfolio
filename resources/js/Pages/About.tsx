import {Link, Head} from "@inertiajs/react";
import {PageProps, PortfolioProject} from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import {generatePageTitle} from "@/lib/utils";
import PageTitle from "@/Components/PageTitle";
import ProjectCard from "@/Components/Home/ProjectCard";
import Markdown from "react-markdown";
import {mdC, mdExperienceList, mdPrimaryStrong} from "@/lib/markdown-utils";

export default function About({portfolio, allProjects}: PageProps<{ allProjects: PortfolioProject[] }>) {
    return (
        <>
            <Head title={generatePageTitle("About")}/>
            <BaseLayout>
                <div className="flex flex-col w-full">
                    {/*<PageTitle>About</PageTitle>*/}
                    <div className="mt-5 flex flex-col gap-4 text-lg">
                        <Markdown
                            className="whitespace-pre-line"
                            components={mdC([mdPrimaryStrong, mdExperienceList])}
                        >
                            {portfolio.about}
                        </Markdown>
                    </div>
                    <PageTitle id="my_projects" className="mt-8 mb-4">My Projects</PageTitle>
                    <div className="flex flex-col gap-4 text-primary">
                        {allProjects.map((project) => (
                            <ProjectCard key={project.id} project={project}/>
                        ))}
                    </div>

                </div>
            </BaseLayout>
        </>
    );
}
