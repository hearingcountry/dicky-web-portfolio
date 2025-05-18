import Image from "next/image";
import Link from "next/link";

export default function Section2() {
    return (
        <section className="relative py-24 bg-[#fffbf6] isolate">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <h2 className="mb-12 text-4xl font-semibold text-center md:mb-16 lg:mb-24 text-primary md:text-5xl lg:text-7xl">Featured Projects</h2>
                <div className="grid grid-cols-1 mb-32 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4 ">
                        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-700 sm:text-4xl">Rapspoint</h2>
                            <div className="flex flex-wrap w-full gap-2">
                                <p className="inline-block px-3 text-xs font-medium leading-7 text-white bg-green-500 border border-green-300 rounded-full py md:text-md">Product Designer</p>
                                <p className="inline-block px-3 text-xs font-medium leading-7 text-white border rounded-full py border-violet-300 bg-violet-500 md:text-md">Frontend Developer</p>
                            </div>
                            <p className="mt-4 leading-8 text-zinc-500 text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                            <button className="px-8 py-3 mt-4 text-sm font-semibold text-white border border-orange-200 rounded-md bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">
                                <Link href="https://rapspoint.com" target="_blank">
                                    Visit Website
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative px-6 pt-8 overflow-hidden bg-blue-300 isolate sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                            <div className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true" />
                            <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                                <Image
                                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                                    alt="Product screenshot"
                                    width={2432}
                                    height={1442}
                                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-zinc-800 ring-1 ring-white/10"
                                />
                            </div>
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-primary">Deploy faster</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-zinc-700 sm:text-4xl">A better workflow</p>
                            <p className="mt-6 text-lg leading-8 text-zinc-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative px-6 pt-8 overflow-hidden bg-orange-400 isolate sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                            <div className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true" />
                            <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                                <Image
                                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                                    alt="Product screenshot"
                                    width={2432}
                                    height={1442}
                                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-zinc-800 ring-1 ring-white/10"
                                />
                            </div>
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl" aria-hidden="true" />
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
