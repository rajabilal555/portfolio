import {Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import {MdWavingHand} from "react-icons/md";
import {FiChevronRight} from "react-icons/fi";
import Divider from "@/Components/Divider";
import TechCard from "@/Components/Home/TechCard";
import SecondaryButton from "@/Components/Buttons/SecondaryButton";
import HomeTimeline from "@/Components/HomeSections/HomeTimeline";
import HomeSection from "@/Components/HomeSections/HomeSection";
import ProjectCard from "@/Components/Home/ProjectCard";
import LinkButton from "@/Components/Buttons/LinkButton";
import DynamicFAIcon from "@/Components/Icons/DynamicFAIcons";
import Markdown from "react-markdown";
import {mdC, mdPrimaryStrong} from "@/lib/markdown-utils";

export default function Home({portfolio}: PageProps) {
    return (
        <>
            <Head title={`<${portfolio.name} />`}/>
            <BaseLayout>
                <div className="flex flex-col w-full">
                    <h1 className="flex items-end gap-2 text-4xl font-[600] text-white group/title">
                        Hi, I'm {portfolio.first_name} <MdWavingHand
                        className="motion-safe:animate-bounce text-primary"/>
                        <span className="text-sm font-normal text-slate-400">
                            aka {`<${portfolio.nick_name} />`}
                        </span>
                    </h1>
                    {/* <span className="text-xl font-[600] text-primary">
                        Full Stack Developer
                    </span> */}
                    <div className="flex flex-row gap-2 mt-4">
                        {/* Social Links */}
                        {portfolio.links.map((link) => (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                            >
                                <SecondaryButton>
                                    {/*<FaLinkedin size={20}/>*/}
                                    <DynamicFAIcon icon={link.icon} size="20"/>
                                    {link.name}
                                </SecondaryButton>
                            </a>
                        ))}
                    </div>
                    <Markdown className="mt-4 text-justify" components={mdC([mdPrimaryStrong])}>
                        {portfolio.short_about}
                    </Markdown>
                    <Divider/>

                    <HomeTimeline portfolio={portfolio}/>
                    <Divider className="mt-0"/>

                    <HomeSection title="Some of my Projects">
                        <div className="flex flex-col gap-6 mx-6">
                            <div className="space-y-4 columns-1 md:columns-2 text-primary">
                                {portfolio.projects.map((project) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                    />
                                ))}
                            </div>
                            <div className="flex w-full">
                                <LinkButton href={route('about')} className="group">
                                    View all Projects
                                    <FiChevronRight
                                        size={16}
                                        className="transition-all group-hover:translate-x-1"
                                    />
                                </LinkButton>
                            </div>
                        </div>
                    </HomeSection>
                    {/* <Divider className="mt-0" /> */}

                    <HomeSection title="My evolving skillset">
                        <div className="grid grid-cols-3 gap-4 mx-6 md:grid-cols-5 text-primary">
                            {portfolio.skills.map((skill) => (
                                <TechCard key={skill.id} iconUrl={skill.icon_url} techName={skill.name}/>
                            ))}
                        </div>
                    </HomeSection>

                </div>
            </BaseLayout>
        </>
    );
}
