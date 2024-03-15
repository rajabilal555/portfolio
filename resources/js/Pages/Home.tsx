import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import { MdWavingHand } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Divider from "@/Components/Divider";
import TechCard from "@/Components/TechCard";
import SecondaryButton from "@/Components/SecondaryButton";
import HomeTimeline from "@/Components/HomeSections/HomeTimeline";
import HomeSection from "@/Components/HomeSection";
import ProjectCard from "@/Components/ProjectCard";
import LinkButton from "@/Components/LinkButton";

export default function Welcome({}: PageProps<{}>) {
    return (
        <>
            <Head title="Bilal Pervez" />
            <BaseLayout>
                <div className="flex flex-col w-full">
                    <h1 className="flex items-end gap-2 text-4xl font-[600] text-white">
                        Hi, I'm Bilal <MdWavingHand className="text-primary" />
                        <span className="text-sm font-normal text-slate-400">
                            aka &lt;Tekki /&gt;
                        </span>
                    </h1>
                    {/* <span className="text-xl font-[600] text-primary">
                        Full Stack Developer
                    </span> */}
                    <div className="flex flex-row gap-2 mt-4">
                        {/* Social Links */}
                        <a
                            href="https://www.linkedin.com/in/bilalraja555/"
                            target="_blank"
                        >
                            <SecondaryButton>
                                <FaLinkedin size={20} />
                                LinkedIn
                            </SecondaryButton>
                        </a>
                        <a
                            href="https://github.com/rajabilal555"
                            target="_blank"
                        >
                            <SecondaryButton>
                                <FaGithub size={20} />
                                Github
                            </SecondaryButton>
                        </a>
                    </div>
                    <p className="mt-4 text-justify">
                        I'm a{" "}
                        <span className="font-semibold text-primary">
                            full-stack developer
                        </span>{" "}
                        from Pakistan who loves to build things and solve
                        problems. I'm passionate about learning new technologies
                        and building scalable and maintainable software.
                    </p>
                    <Divider />

                    <HomeTimeline />
                    <Divider className="mt-0" />

                    <HomeSection title="Some of my Projects">
                        <div className="flex flex-col gap-6 mx-6">
                            <div className="flex flex-col gap-4 text-primary">
                                <ProjectCard
                                    className="h-48 transition-all hover:scale-[102%]"
                                    image="https://via.placeholder.com/150"
                                    name="Flutter Project"
                                    description={
                                        "Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. "
                                    }
                                />
                                <ProjectCard
                                    className="h-48 transition-all hover:scale-[102%]"
                                    image="https://via.placeholder.com/150"
                                    name="Flutter Project"
                                    description={
                                        "Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. "
                                    }
                                    link="/projects"
                                />
                            </div>
                            <div className="flex w-full">
                                <LinkButton href="/projects" className="group">
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
                            <TechCard tech="laravel" />
                            <TechCard tech="flutter" />
                            <TechCard tech="react" />
                            <TechCard tech="php" techName="PHP" />
                            <TechCard tech="dart" />
                            <TechCard tech="typescript" />
                        </div>
                    </HomeSection>
                </div>
            </BaseLayout>
        </>
    );
}
