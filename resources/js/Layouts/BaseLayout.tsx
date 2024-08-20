import NavLink from "@/Components/NavLink";
import {PropsWithChildren} from "react";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";

export default function BaseLayout({children}: PropsWithChildren) {
    const {config: {enable_blog}} = usePage().props as unknown as PageProps;

    return (
        <>
            <div
                className="fixed inset-0 top-0 bottom-0 pointer-events-none -z-50 pattern-dots pattern-blue-400 pattern-bg-transparent pattern-size-6 pattern-opacity-5"></div>
            <main
                className="flex flex-col max-w-2xl px-2 mx-auto mt-8 mb-28 antialiased text-foreground font-extralight">
                <div className="flex flex-col flex-auto min-w-0 px-2 mt-6 md:px-0">
                    <div className="max-w-screen-2xl">
                        <header className="flex flex-row justify-between">
                            {/*{route().current() == undefined || (*/}
                            <h3 className="text-xl text-primary font-semibold">Bilal Pervez</h3>
                            {/*)}*/}
                            {/*navigation */}
                            <nav className="flex gap-4">
                                <NavLink
                                    href={route('home')}
                                    active={route().current() === ""}>
                                    home
                                </NavLink>
                                {enable_blog && (
                                    <NavLink
                                        href={route('blog')}
                                        active={route().current() === "blog"}>
                                        blog
                                    </NavLink>
                                )}
                                <NavLink
                                    href={route('about')}
                                    active={route().current() === "about"}>
                                    my work
                                </NavLink>
                                <NavLink
                                    href={route('contact')}
                                    active={route().current() === "contact"}>
                                    contact
                                </NavLink>
                            </nav>
                        </header>
                        <div className="mt-6">
                            {children}
                        </div>
                        {/* footer */}
                        <div className="flex justify-center mt-4">
                            <p className="text-sm text-slate-400">
                                &copy; 2024 Bilal Pervez. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
