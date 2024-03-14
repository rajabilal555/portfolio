import React from "react";
import Card from "../Card";
import HoverLine from "../HoverLine";
import HeaderText from "../HeaderText";
import HomeSection from "../HomeSection";

function TimelineItem({
    title,
    company,
    date,
    children,
}: {
    title: string;
    company: string;
    date: string;
    children: React.ReactNode;
}) {
    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-primary-600"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                {date}
            </time>
            <div className="flex items-center gap-1 text-lg">
                <h4 className="font-[500] text-primary-500">[{company}]</h4>
                <h3 className="font-[400] text-base">{title}</h3>
            </div>

            <div className="mb-2 text-base text-foreground">{children}</div>
        </li>
    );
}

export default function HomeTimeline() {
    return (
        <HomeSection title="My Timeline">
            <ol className="relative m-6 border-primary-700 border-s">
                <TimelineItem
                    date={"OCT 2023 – PRESENT"}
                    title={"Flutter Developer"}
                    company={"Carly"}
                >
                    <ul className="ml-4 list-disc">
                        <li>Boosted project development efficiency by 60%.</li>
                        <li>
                            Collaborated with the backend design team, providing
                            valuable input to improve the overall system
                            architecture and efficiency.
                        </li>
                        <li>
                            Collaborated with the design team to implement
                            user-friendly and practical designs.
                        </li>

                        <li>
                            Helped add a real-time web sockets feature by
                            working closely with the team.
                        </li>
                    </ul>
                </TimelineItem>
                <TimelineItem
                    date={"DEC 2018 – PRESENT"}
                    title={"Full stack Engineer"}
                    company={"Freelance"}
                >
                    <ul className="ml-4 list-disc">
                        <li>
                            Developed and deployed diverse web applications,
                            mobile apps, and custom software using various
                            programming languages, frameworks, and technologies.
                        </li>
                        <li>
                            Collaborated closely with clients to understand and
                            meet their specific software needs.
                        </li>
                        <li>
                            Proficient in problem-solving, troubleshooting, and
                            efficiently resolving technical issues.
                        </li>
                        <li>
                            Skilled in project management and communication,
                            ensuring effective coordination with clients,
                            stakeholders, and team members.
                        </li>
                    </ul>
                </TimelineItem>

                <TimelineItem
                    date={"OCT 2020 – SEP 2022"}
                    title={"Backend Engineer"}
                    company={"Softologics"}
                >
                    <ul className="ml-4 list-disc">
                        <li>
                            Developed and deployed diverse web applications,
                            mobile apps, and custom software using various
                            programming languages, frameworks, and technologies.
                        </li>
                        <li>
                            Collaborated closely with clients to understand and
                            meet their specific software needs.
                        </li>
                        <li>
                            Proficient in problem-solving, troubleshooting, and
                            efficiently resolving technical issues.
                        </li>
                        <li>
                            Skilled in project management and communication,
                            ensuring effective coordination with clients,
                            stakeholders, and team members.
                        </li>
                    </ul>
                </TimelineItem>
            </ol>
        </HomeSection>
    );
}
