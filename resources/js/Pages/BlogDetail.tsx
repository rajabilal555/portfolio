import {Link, Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import {appName, generatePageTitle} from "@/lib/utils";

export default function Blog({config}: PageProps<{}>) {
    // console.log(import.meta.env);
    console.log(config);

    let blogItem =
        {
            name: "Blog Post 1",
            content: "This is the first blog post",
            image: "https://via.placeholder.com/150",
        };

    return (
        <>
            <Head title={generatePageTitle(blogItem.name)}/>
            <BaseLayout>
                <div className="flex flex-col w-full">
                    <h1 className="flex items-end gap-2 text-4xl font-[600] text-white">
                        {blogItem.name}
                    </h1>
                    <div className="mt-5 flex flex-col gap-4 text-primary">
                        {blogItem.content}
                    </div>
                </div>
            </BaseLayout>
        </>
    );
}
