import {Link, Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import {generatePageTitle} from "@/lib/utils";
import PageTitle from "@/Components/PageTitle";

export default function Contact({}: PageProps<{}>) {
    return (
        <>
            <Head title={generatePageTitle("Contact")}/>
            <BaseLayout>
                <div className="flex flex-col w-full">
                    <PageTitle>Work in Progress</PageTitle>
                </div>
            </BaseLayout>
        </>
    );
}
