import {Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import {generatePageTitle} from "@/lib/utils";
import LinkButton from "@/Components/Buttons/LinkButton";
import DynamicFAIcon from "@/Components/Icons/DynamicFAIcons";
import OutlineButton from "@/Components/Buttons/OutlineButton";
import {FaEnvelope, FaFilePdf} from "react-icons/fa";

export default function Contact({portfolio}: PageProps<{}>) {
    return (
        <>
            <Head title={generatePageTitle("Contact")}/>
            <BaseLayout>
                <div className="flex flex-col w-full items-center mt-10">
                    {/* Page Title */}
                    <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-lg text-center mb-2 max-w-2xl">
                        Whether you have a project in mind, need help with your app, or just want to say hello, feel
                        free to reach out! I'm always open to discussing new opportunities and collaborations.
                    </p>
                    <div className="mt-6 text-center">
                        <p className="text-lg">Interested in working together or just want to chat?</p>
                    </div>
                    {/* Contact & Resume Buttons */}
                    <div className="flex flex-row gap-4 mt-4">
                        <a href={`mailto:${portfolio.email}`} className="inline-block">
                            <OutlineButton className="flex items-center justify-center px-6 py-3 space-x-2">
                                <FaEnvelope/> <span>Email me</span>
                            </OutlineButton>
                        </a>
                        {portfolio.resume_url && (
                            <a href={`/storage/${portfolio.resume_url}`} download className="inline-block">
                                <OutlineButton className="flex items-center justify-center px-6 py-3 space-x-2">
                                    <FaFilePdf/> <span>Download My Resume</span>
                                </OutlineButton>
                            </a>
                        )}
                    </div>
                    {/* Social Links */}
                    <div className="mt-4 text-center">
                        <p className="text-lg">Or check out my socials below:</p>
                        <div className="flex justify-center space-x-6 mt-4">
                            {portfolio.links.map((link, index) => (
                                <a key={index} href={link.url} target="_blank">
                                    <LinkButton className="p-3">
                                        <DynamicFAIcon icon={link.icon} size="24"/>
                                    </LinkButton>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-lg font-semibold mt-2">Let’s create something amazing!</p>
                    </div>
                </div>
            </BaseLayout>
        </>
    );
}
