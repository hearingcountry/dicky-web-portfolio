'use client'
import Comjam from "../../image/ComjamLight.webp";
import Neosen from "../../image/Neosen.webp";
import Galang from "../../image/Galang.webp";
import Bookhub from "../../image/Bookhub.webp";
import Mashup from "../../image/Mashup.webp";
import NeosenGrid from "../../image/NeosenGrid.webp";
import NeosenWeb from "../../image/NeosenWeb.webp";
import Storify from "../../image/Storify.webp";
import ComjamDark from "../../image/ComjamDark.webp";
import NeosenMobile from "../../image/NeosenMobile.webp";
import Ruang from "../../image/Ruang.webp";
import HaloBus from "../../image/HaloBus.webp";
import GalangGrid from "../../image/GalangGrid.webp";
import GalangShow from "../../image/GalangShow.webp";
import Warasfit from "../../image/Warasfit.webp";
import Elephant from "../../image/Elephant.webp";
import Image from "next/image";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Section1() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    
    const slidingTexts = [
        { text: "my journey", gradient: "bg-gradient-to-r from-orange-500 to-red-500", shadow: "drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" },
        { text: "my life", gradient: "bg-gradient-to-r from-blue-500 to-purple-500", shadow: "drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" },
        { text: "my story", gradient: "bg-gradient-to-r from-pink-500 to-rose-500", shadow: "drop-shadow-[0_0_8px_rgba(236,72,153,0.4)]" },
        { text: "my passion", gradient: "bg-gradient-to-r from-indigo-500 to-blue-500", shadow: "drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]" },
        { text: "my world", gradient: "bg-gradient-to-r from-purple-500 to-pink-500", shadow: "drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentTextIndex((prevIndex) => 
                    prevIndex === slidingTexts.length - 1 ? 0 : prevIndex + 1
                );
                setIsVisible(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [slidingTexts.length]);

    return (
        <section className="relative isolate pt-14">
            <div className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-300 to-fuchsia-300 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <svg className="absolute inset-0 -z-10 h-full w-full stroke-orange-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
            </svg>
            <div className="py-24 sm:py-32 lg:pb-40">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-block">
                            <div className="flex items-center gap-2 px-6 py-2 mb-4 bg-green-100 border border-green-500 rounded-full md:mb-8">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></span>
                                <p className="text-sm font-medium text-green-500 md:text-lg">Available for new project</p>
                            </div>
                        </div>
                        <h1 className="text-[40px] leading-tight font-bold tracking-normal text-zinc-700 md:text-6xl lg:text-8xl">
                            Hello Folks! <span className="text-transparent bg-clip-text text-primary">Welcome</span> to{" "}
                            <span 
                                className={`relative inline-block transition-all duration-500 ease-in-out transform ${
                                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95'
                                }`}
                                style={{
                                    transform: `rotate(-1deg)`,
                                }}
                            >
                                {/* Background highlight effect */}
                                <span 
                                    className={`absolute inset-0 ${slidingTexts[currentTextIndex].gradient} opacity-30 rounded-lg`}
                                    style={{
                                        transform: 'translate(-2px, 4px) skew(-2deg)',
                                        zIndex: -1,
                                        filter: 'blur(1px)'
                                    }}
                                />
                                {/* Main text */}
                                <span 
                                    className={`relative z-10 text-transparent bg-clip-text ${slidingTexts[currentTextIndex].gradient} font-bold`}
                                    style={{
                                        textShadow: '0 0 0 transparent',
                                        WebkitTextStroke: '1px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    {slidingTexts[currentTextIndex].text}
                                </span>
                            </span>
                        </h1>
                        <p className="mt-6 leading-6 text-sm md:mt-8 md:leading-10 lg:mt-12 md:text-xl text-zinc-400">
                            A creative visual designer based in Indonesia with 1 year of professional experience specializing in user interface and digital product design. Proficient in creating engaging designs for mobile applications and
                            websites.
                        </p>
                        <div className="flex items-center justify-center mt-10 group gap-x-6">
                            <button>
                                <Link
                                    href="/project"
                                    className="px-8 py-4 text-sm font-semibold text-white border border-orange-500 rounded-md bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                                >
                                    Show Project{" "}
                                </Link>
                            </button>
                            <button>
                                <Link href="/about" className="text-sm font-semibold leading-6 text-primary lg:text-xl">
                                    Get in Touch <span aria-hidden="true">→</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    
                    {/* Marquee Photo Gallery */}
                    <div className="mt-24 sm:mt-32">
                        <div className="space-y-6">
                            {/* Marquee Row 1 - Moving Left */}
                            <div className="overflow-hidden relative">
                                <div className="flex gap-6 animate-marquee-left">
                                    {/* First set */}
                                    {[Comjam, Neosen, Galang, Bookhub, Warasfit, Elephant, Storify, ComjamDark].map((photo, index) => (
                                        <div key={`row1-set1-${index}`} className="relative flex-shrink-0 w-80 md:w-96 lg:w-[28rem] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                            <div className="aspect-[4/3] relative">
                                                <Image 
                                                    src={photo} 
                                                    alt={`Portfolio ${index + 1}`} 
                                                    className="object-cover"
                                                    fill
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {/* Duplicate set for seamless loop */}
                                    {[Comjam, Neosen, Galang, Bookhub, Warasfit, Elephant, Storify, ComjamDark].map((photo, index) => (
                                        <div key={`row1-set2-${index}`} className="relative flex-shrink-0 w-80 md:w-96 lg:w-[28rem] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                            <div className="aspect-[4/3] relative">
                                                <Image 
                                                    src={photo} 
                                                    alt={`Portfolio ${index + 1}`} 
                                                    className="object-cover"
                                                    fill
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Marquee Row 2 - Moving Right */}
                            <div className="overflow-hidden relative">
                                <div className="flex gap-6 animate-marquee-right">
                                    {/* First set */}
                                    {[NeosenWeb, Mashup, GalangGrid, NeosenGrid, NeosenMobile, Ruang, HaloBus, GalangShow].map((photo, index) => (
                                        <div key={`row2-set1-${index}`} className="relative flex-shrink-0 w-80 md:w-96 lg:w-[28rem] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                            <div className="aspect-[4/3] relative">
                                                <Image 
                                                    src={photo} 
                                                    alt={`Portfolio ${index + 9}`} 
                                                    className="object-cover"
                                                    fill
                                                />
                                            </div>
                                        </div>
                                    ))}
                                    {/* Duplicate set for seamless loop */}
                                    {[NeosenWeb, Mashup, GalangGrid, NeosenGrid, NeosenMobile, Ruang, HaloBus, GalangShow].map((photo, index) => (
                                        <div key={`row2-set2-${index}`} className="relative flex-shrink-0 w-80 md:w-96 lg:w-[28rem] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                            <div className="aspect-[4/3] relative">
                                                <Image 
                                                    src={photo} 
                                                    alt={`Portfolio ${index + 9}`} 
                                                    className="object-cover"
                                                    fill
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CSS for Marquee Animation */}
                    <style jsx>{`
                        @keyframes marquee-left {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-50%);
                            }
                        }
                        
                        @keyframes marquee-right {
                            0% {
                                transform: translateX(-50%);
                            }
                            100% {
                                transform: translateX(0);
                            }
                        }
                        
                        .animate-marquee-left {
                            animation: marquee-left 30s linear infinite;
                        }
                        
                        .animate-marquee-right {
                            animation: marquee-right 25s linear infinite;
                        }
                        
                        /* Pause on hover */
                        .animate-marquee-left:hover,
                        .animate-marquee-right:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
}
