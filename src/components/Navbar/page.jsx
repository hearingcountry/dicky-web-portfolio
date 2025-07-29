"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../Navbar/logo.svg";

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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLink = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "/post",
            name: "Post",
        },
        {
            href: "/portfolio",
            name: "Portfolio",
        },
        {
            href: "/about",
            name: "About",
        },
    ];

    const pathname = usePathname();
    const completion = useReadingProgress();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup function to reset scroll when component unmounts
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="fixed top-0 z-50 w-full border-b border-gray-200 shadow-sm backdrop-blur-md bg-white/90">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-150" style={{ width: `${completion}%` }} />

                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center transition-transform hover:scale-105">
                                <Image src={logo} alt="Logo" width={40} height={40} className="w-auto h-8" />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="flex items-baseline ml-10 space-x-4">
                                {navLink.map((link) => {
                                    const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                                isActive ? "text-orange-500 bg-orange-50 border-b-2 border-orange-500" : "text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}

                                {/* Work Together Button - Fixed Animation */}
                                <a
                                    href="mailto:dicky@halosurya.com"
                                    className="overflow-hidden relative px-6 py-3 text-sm font-medium text-white bg-orange-500 rounded-md border transition-all duration-300 group hover:bg-green-100 hover:shadow-sm hover:border-green-500"
                                >
                                    <span className="block relative z-10 transition-opacity duration-300 group-hover:opacity-0">Work Together</span>
                                    <span className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 group-hover:text-green-500 group-hover:opacity-100">Let&apos;s Collaborate</span>
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex justify-center items-center p-2 text-gray-700 rounded-md hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Hamburger icon */}
                                <svg className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                {/* Close icon */}
                                <svg className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu - Full Canvas */}
            <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                {/* Backdrop */}
                <div className="absolute inset-0 backdrop-blur-sm bg-black/50" onClick={() => setIsMenuOpen(false)} />

                {/* Menu Content */}
                <div className={`relative w-full h-full bg-white transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    {/* Header dengan close button */}
                    <div className="flex justify-end items-center px-6 py-3">
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-700 rounded-md hover:text-orange-500 hover:bg-gray-100">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col justify-between pb-16 h-full">
                        <div className="px-6 py-4 space-y-2">
                            {navLink.map((link, index) => {
                                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`block px-4 py-3 text-2xl font-semibold rounded-lg transition-all duration-200 hover:translate-x-2 ${isActive ? "text-orange-500 bg-orange-50" : "text-gray-700 hover:text-orange-500"}`}
                                        style={{
                                            animationDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Mobile Work Together Button - Centered at Bottom */}
                        <div className="flex justify-center pb-6">
                            <a
                                href="mailto:dicky.suryananda@gmail.com"
                                onClick={() => setIsMenuOpen(false)}
                                className="overflow-hidden relative px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-lg border transition-all duration-300 group hover:bg-green-100 hover:shadow-sm hover:border-green-500"
                            >
                                <span className="block relative z-10 transition-opacity duration-300 group-hover:opacity-0">Work Together</span>
                                <span className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 group-hover:text-green-500 group-hover:opacity-100">Let&apos;s Collaborate</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
