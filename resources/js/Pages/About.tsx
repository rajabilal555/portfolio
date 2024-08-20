import {Link, Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import {generatePageTitle} from "@/lib/utils";
import PageTitle from "@/Components/PageTitle";
import ProjectCard from "@/Components/Home/ProjectCard";

export default function About({}: PageProps<{}>) {
    return (
        <>
            <Head title={generatePageTitle("About")}/>
            <BaseLayout>
                <div className="flex flex-col w-full">
                    {/*<PageTitle>About</PageTitle>*/}
                    <div className="mt-5 flex flex-col gap-4 text-primary">
                        <p className="whitespace-pre-line">
                            {`I have immersed myself in the world of Software Development for more than 4 years. My expertise spans across languages including PHP, Dart, and Nodejs as well as front-end technologies like Typescript, React and Vuejs. I have hands-on experience with frameworks such as Laravel, Flutter, Tailwind, and Nextjs and managing databases like MySQL and MongoDB. I have tackled various projects, ranging from web development to mobile app development. I am highly motivated, fast learner, self-taught and continuously learning to enhance my skills and staying up-to-date with industry trends.

                            🔭 Currently I'm freelancing and working at Nayapay.
                            ⚡ Fun fact: I've been passionate about tech since the age of 12`}
                        </p>
                    </div>
                    <PageTitle id="my_projects" className="mt-8 mb-4">My Projects</PageTitle>
                    <div className="flex flex-col gap-4 text-primary">
                        <ProjectCard
                            image="https://via.placeholder.com/150"
                            name="Flutter Project"
                            description={
                                "Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. "
                            }
                        />
                        <ProjectCard
                            image="https://via.placeholder.com/150"
                            name="Flutter Project"
                            description={
                                "Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet.Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. "
                            }
                            link="/projects"
                        />
                    </div>

                </div>
            </BaseLayout>
        </>
    );
}
