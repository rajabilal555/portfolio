import {Link, Head} from "@inertiajs/react";
import {PageProps} from "@/types";
import BaseLayout from "@/Layouts/BaseLayout";
import BlogCard from "@/Components/Blog/BlogCard";
import {generatePageTitle} from "@/lib/utils";
import PageTitle from "@/Components/PageTitle";

export default function Blog({}: PageProps<{}>) {

    let blogItems = [
        {
            id: 1,
            name: "Blog Post 1",
            description: "This is the first blog post",
            image: "https://via.placeholder.com/150",
            link: "/blog/1",
        },
        {
            id: 2,
            name: "Blog Post 2",
            description: "This is the second blog post",
            image: "https://via.placeholder.com/150",
            link: "/blog/2",
        },
        {
            id: 3,
            name: "Blog Post 3",
            description: "This is the third blog post",
            // image: "https://via.placeholder.com/150",
            // link: "/blog/3",
        }
    ];

    return (
        <>
            <Head title={generatePageTitle("About")}/>
            <BaseLayout>
                <div className="flex flex-col w-full">
                    <PageTitle>Blog</PageTitle>
                    <div className="mt-5 flex flex-col gap-4 text-primary">
                        {
                            blogItems.map((item, index) => (
                                <BlogCard key={item.id} name={item.name} description={item.description}
                                          image={item.image} link={item.link}/>
                            ))
                        }
                    </div>
                </div>
            </BaseLayout>
        </>
    );
}
