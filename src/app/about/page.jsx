import Link from "next/link";
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
import Profile from "../../image/profile.webp";

export const metadata = {
    title: "Dicky Surya | About",
    description: "About Dicky Surya Nanda",
};

const timeline = [
    {
        name: "Telkomsel Branch Malang",
        description: "Product Researcher Intern",
        date: "Oct 2023 - Dec 2023",
        dateTime: "2023-10",
    },
    {
        name: "PT Raps Maju Bersama",
        description: "Product Designer",
        date: "Feb 2024 - Feb 2025",
        dateTime: "2024-02",
    },
    {
        name: "PT Awan Data Indonesia",
        description: "UI/UX Designer",
        date: "Apr 2024 - Mar 2025",
        dateTime: "2024-04",
    },
];

export default function About() {
    return (
        <main className="isolate pb-32 md:pb-40">
            {/* Hero section */}
            <div className="isolate overflow-hidden relative bg-gradient-to-b -z-10 from-orange-100/20">
                <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-orange-600/10 ring-1 ring-orange-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
                <div className="px-6 py-32 mx-auto max-w-7xl md:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h1 className="max-w-2xl text-4xl font-bold leading-[48px] md:leading-[64px] tracking-tight md:text-5xl text-zinc-700 lg:col-span-2 xl:col-auto">Get in Touch</h1>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p className="text-base font-medium leading-7 md:text-lg md:leading-10 text-zinc-400">
                                {`
                                    Final-year Information Technology student with 1+ year of UI/UX experience in B2B cloud and B2C gaming products. Experienced in end-to-end design, improving dashboards, and building scalable design systems. Awarded 4+ national honors in design and tech. 
                                `}
                            </p>
                            <button className="mt-12">
                                <Link
                                    href="/project"
                                    className="px-8 py-4 text-sm font-semibold text-white rounded-md border border-orange-500 bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                                >
                                    Download My Resume{" "}
                                </Link>
                            </button>
                        </div>

                        <Image src={Profile} alt="Image Profile" className="mt-12 aspect-[6/5] w-full max-w-md rounded-2xl object-cover sm:mt-16 lg:mt-0 xl:row-span-2 xl:row-end-2 xl:mt-36" />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white -z-10 sm:h-32" />
            </div>

            {/* Timeline section */}
            <div className="px-6 mx-auto -mt-8 max-w-7xl lg:px-8">
                <h3 className="mb-16 text-3xl font-semibold text-center text-primary">Work Experiences</h3>
                <div className="grid overflow-hidden grid-cols-1 gap-8 mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline.map((item) => (
                        <div key={item.name}>
                            <time dateTime={item.dateTime} className="flex items-center text-sm font-semibold leading-6 text-orange-600">
                                <svg viewBox="0 0 4 4" className="flex-none mr-4 w-1 h-1" aria-hidden="true">
                                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                                </svg>
                                {item.date}
                                <div className="absolute -ml-2 w-screen h-px -translate-x-full bg-zinc-700/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true" />
                            </time>
                            <p className="mt-6 text-lg font-semibold tracking-tight leading-8 text-zinc-700">{item.name}</p>
                            <p className="mt-1 text-base leading-7 text-zinc-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Showcase */}
            <div className="px-6 mx-auto mt-16 max-w-7xl sm:mt-40 lg:px-8">
                <h2 className="text-3xl leading-[42px] md:leading-[48px] font-bold tracking-tight text-zinc-700 md:text-4xl mb-16">Love and Life with Visuals</h2>
                <div class="grid gap-4 mx-auto max-w-7xl md:grid-cols-2">
                    <div class="grid gap-4">
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={Comjam} alt="Comjam" />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div className="group">
                                <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                    <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={Bookhub} alt="Bookhub" />
                                </div>
                            </div>
                            <div className="group">
                                <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                    <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={Mashup} alt="Mashup" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={Neosen} alt="Neosen" />
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div className="group">
                                <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                    <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={NeosenGrid} alt="Neosen Grid" />
                                </div>
                            </div>
                            <div className="group">
                                <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                    <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={Storify} alt="Storify" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={ComjamDark} alt="Comjam Dark" />
                            </div>
                        </div>
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={NeosenMobile} alt="Neosen Mobile" />
                            </div>
                        </div>
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={Ruang} alt="Ruang" />
                            </div>
                        </div>
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={HaloBus} alt="Halo Bus" />
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={Galang} alt="Galang" />
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={NeosenWeb} alt="Neosen Web" />
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={GalangGrid} alt="Galang Grid" />
                            </div>
                        </div>
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={GalangShow} alt="Galang S" />
                            </div>
                        </div>
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={Warasfit} alt="Waras Fit" />
                            </div>
                        </div>
                        <div className="group">
                            <div className="relative overflow-hidden group-hover:cursor-pointer group-hover:border-2 group-hover:border-orange-500 transition-transform duration-1000 rounded-lg group-hover:scale-[0.99]">
                                <Image class="max-w-full h-auto rounded-lg transition-transform duration-1000 group-hover:scale-105" src={Elephant} alt="Elephant" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-12">
                    <button>
                        <Link
                            href="https://dribbble.com/hearingcountry"
                            target="_blank"
                            className="px-8 py-4 text-sm font-semibold text-white rounded-md border border-orange-500 bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                        >
                            Show More{" "}
                        </Link>
                    </button>
                </div>

                {/* <div className="flex flex-col gap-8 mx-auto mt-16 max-w-2xl lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                    <div className="flex flex-col-reverse gap-y-8 gap-x-16 justify-between p-8 bg-gray-50 rounded-2xl sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">250k</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-gray-900">Users on the platform</p>
                            <p className="mt-2 text-base leading-7 text-gray-600">Vel labore deleniti veniam consequuntur sunt nobis.</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse gap-y-8 gap-x-16 justify-between p-8 bg-gray-900 rounded-2xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">$8.9 billion</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">We're proud that our customers have made over $8 billion in total revenue.</p>
                            <p className="mt-2 text-base leading-7 text-gray-400">Eu duis porta aliquam ornare. Elementum eget magna egestas.</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse gap-y-8 gap-x-16 justify-between p-8 bg-orange-600 rounded-2xl sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">401,093</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">Transactions this year</p>
                            <p className="mt-2 text-base leading-7 text-orange-200">Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </main>
    );
}
