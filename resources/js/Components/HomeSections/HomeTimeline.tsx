import React from "react";
import HomeSection from "./HomeSection";
import {PageProps} from "@/types";
import Markdown from "react-markdown";
import {mdC, mdExperienceList, mdPrimaryStrong} from "@/lib/markdown-utils";
import dayjs from "dayjs";
import {formatExperienceDate} from "@/lib/utils";

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
        <li className="mb-8 ms-4">
            <div
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-primary-600"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 uppercase">
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


export default function HomeTimeline({portfolio}: { portfolio: PageProps['portfolio'] }) {
    return (
        <HomeSection title="Work Experience" className="mb-0">
            <ol className="relative mx-2 mt-6 border-primary-700 border-s">
                {portfolio.experiences.map((experience) => (
                    <TimelineItem
                        key={experience.id}
                        date={`${formatExperienceDate(experience.period_start_at)} – ${formatExperienceDate(experience.period_end_at)}`}
                        title={experience.title}
                        company={experience.company}
                    >
                        <Markdown components={mdC([mdExperienceList, mdPrimaryStrong])}>
                            {experience.description}
                        </Markdown>
                    </TimelineItem>
                ))}
            </ol>
        </HomeSection>
    );
}
