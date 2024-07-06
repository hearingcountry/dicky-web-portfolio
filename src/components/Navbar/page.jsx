"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * React Hook to get the scroll percentage from the page, returns value from 0 to 100
 */
export function useReadingProgress() {
    const [completion, setCompletion] = useState(0);
    useEffect(() => {
        function updateScrollCompletion() {
            // see how much we have scrolled
            const currentProgress = window.scrollY;
            // see how much total scroll is available
            let scrollHeight = document.body.scrollHeight - window.innerHeight;
            if (scrollHeight) {
                setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
            }
        }
        // add scroll event listener
        window.addEventListener("scroll", updateScrollCompletion);

        // remove scroll event listener on umount
        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []);
    return completion;
}

export default function Navbar() {
    const navLink = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "/blog",
            name: "Blog",
        },
        {
            href: "/project",
            name: "Project",
        },
        {
            href: "/about",
            name: "About",
        },
    ];

    const pathname = usePathname();

    const navActive = "font-semibold text-primary text-md md:text-lg";
    const navInactive = "text-zinc-400 text-md md:text-lg";
    const pointerActive = "w-2 block h-2 mt-1 rounded-full animate-bounce mx-auto bg-primary";
    const completion = useReadingProgress();

    return (
        <nav className="fixed z-50 flex justify-center w-full">
            <span
                id="progress-bar"
                style={{
                    transform: `translateX(${completion - 100}%)`,
                }}
                className={`absolute top-0 w-full transition-transform duration-150 h-2 bg-purple-400`}
            />
            <div className="items-center mx-auto mt-8 bg-white border-2 rounded-full backdrop-blur-sm border-primary">
                <ul className="flex list-none">
                    {navLink.map((link) => {
                        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                        return (
                            <li key={link.name} className="flex-col items-center justify-center px-4 py-2">
                                <Link href={link.href} className={isActive ? navActive : navInactive}>
                                    {link.name}
                                    <div className={isActive ? pointerActive : ""}></div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
