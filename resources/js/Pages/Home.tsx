import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import { MdOutlineWavingHand, MdWavingHand } from "react-icons/md";
import PrimaryButton from "@/Components/PrimaryButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Divider from "@/Components/Divider";
import TechCard from "@/Components/TechCard";
import Card from "@/Components/Card";
import SecondaryButton from "@/Components/SecondaryButton";
import HoverLine from "@/Components/HoverLine";
import HomeTimeline from "@/Components/HomeSections/HomeTimeline";
import HomeSection from "@/Components/HomeSection";

export default function Welcome({}: PageProps<{}>) {
    return (
        <>
            <Head title="Welcome" />
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

                    <HomeSection title="Technologies">
                        <div className="grid grid-cols-5 gap-4 m-6 text-primary">
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
