import NavLink from "@/Components/NavLink";
import { PropsWithChildren } from "react";

export default function BaseLayout({ children }: PropsWithChildren) {
    return (
        <>
            <div className="fixed inset-0 top-0 bottom-0 pointer-events-none -z-50 pattern-dots pattern-blue-400 pattern-bg-transparent pattern-size-6 pattern-opacity-5"></div>
            <main className="flex flex-col max-w-2xl mx-4 mt-8 mb-40 antialiased md:flex-row lg:mx-auto text-foreground font-extralight">
                <main className="flex flex-col flex-auto min-w-0 px-2 mt-6 md:px-0">
                    <div className="max-w-screen-2xl">
                        <header className="flex flex-row justify-between">
                            {/* <h3 className="text-xl text-primary">Bilal Pervez</h3> */}
                            {/* navigation */}
                            <nav className="flex gap-4">
                                <NavLink
                                    href="/"
                                    active={route().current() === ""}
                                >
                                    home
                                </NavLink>
                                <NavLink
                                    href="/blog"
                                    active={route().current() === "blog"}
                                >
                                    blog
                                </NavLink>
                                <NavLink
                                    href="/about"
                                    active={route().current() === "about"}
                                >
                                    about
                                </NavLink>
                                <NavLink
                                    href="/contact"
                                    active={route().current() === "contact"}
                                >
                                    contact
                                </NavLink>
                            </nav>
                        </header>

                        <div className="mt-6">{children}</div>
                    </div>
                </main>
            </main>
        </>
    );
}
