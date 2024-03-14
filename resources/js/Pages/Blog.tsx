import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";

export default function Welcome({}: PageProps<{}>) {
    return (
        <>
            <Head title="Blog | Bilal Pervez" />
            <BaseLayout>
                <div className="flex flex-col w-full">
                    <h1 className="flex items-end gap-2 text-4xl font-[600] text-white">
                       Blog
                    </h1>

                </div>
            </BaseLayout>
        </>
    );
}
