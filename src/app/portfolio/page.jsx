import Image from "next/image";
import Link from "next/link";
import Taracover from "../../image/project/tara-cover.webp";
import Galang from "../../image/project/galang.webp";
import Neosen from "../../image/project/neosen-video.webp";

export const metadata = {
    title: "Dicky Surya | Portfolio",
    description: "Project Dicky Surya Nanda",
};

export default function Project() {
    return (
        <main className="flex relative flex-col justify-between items-center mt-12 md:my-24">
            <div className="overflow-hidden absolute inset-x-0 -top-40 blur-3xl transform-gpu -z-10 sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-300 to-fuchsia-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
            {/* Container */}
            <div className="px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
                {/* Featured Professional Work Section */}
                {/* <div className="mb-8 text-center sm:mb-12 lg:mb-16">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight leading-10 md:text-4xl lg:text-5xl text-zinc-700">Featured Professional Work</h2>
                </div> */}

                {/* Professional Work Grid */}
                {/* <div className="flex flex-col gap-8 justify-center mx-auto mb-16 max-w-6xl lg:flex-row lg:gap-12 sm:mb-20 lg:mb-24">
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] flex-1 max-w-lg hover:rotate-1 transform-gpu">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.3),transparent_50%)]"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8 from-white/10"></div>

                        <div className="relative p-8 text-white lg:p-10">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-semibold tracking-wide text-blue-200">2024</span>
                                </div>
                                <div className="px-4 py-2.5 bg-gradient-to-r from-blue-500/40 to-indigo-500/40 backdrop-blur-md rounded-full border border-blue-300/30 shadow-lg">
                                    <span className="flex items-center text-sm font-semibold">
                                        <span className="mr-2">💼</span>
                                        Professional Work
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="mb-3 text-2xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 lg:text-3xl">Streamlining Car Discovery Process with Recent Activity</h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full"></div>
                                </div>

                                <p className="text-sm font-medium leading-relaxed text-blue-100/90 lg:text-base">
                                    Enhancing the car-buying journey with a smarter way to revisit past interactions, ensuring they pick up where they left off and make informed decisions.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1.5 bg-blue-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-blue-400/30">UX Research</span>
                                    <span className="px-3 py-1.5 bg-indigo-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-indigo-400/30">UI Design</span>
                                    <span className="px-3 py-1.5 bg-purple-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-purple-400/30">Frontend</span>
                                </div>

                                <Link
                                    href="/portfolio/maxcloud"
                                    className="group/btn inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/30 hover:from-white/25 hover:to-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-blue-500/25"
                                >
                                    <span className="mr-3">View Project</span>
                                    <div className="overflow-hidden relative">
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="relative mx-6 mb-6">
                            <div className="overflow-hidden relative h-48 bg-gradient-to-br rounded-2xl border shadow-2xl backdrop-blur-md lg:h-56 from-white/15 to-white/5 border-white/30">
                                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-blue-900/20"></div>
                                <Image src={Taracover} alt="Car Discovery Project" className="object-cover w-full h-full opacity-95 filter transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110" />

                        
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-green-500 rounded-full text-xs font-semibold text-white shadow-lg">✓ Live Project</div>
                                <div className="flex absolute right-4 bottom-4 justify-center items-center w-12 h-12 rounded-full border backdrop-blur-sm bg-white/20 border-white/30">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>

                          
                            <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 blur-xl transition-opacity duration-500 transform scale-105 from-blue-500/20 to-indigo-500/20 group-hover:opacity-100"></div>
                        </div>

                    
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr to-transparent rounded-tr-full from-indigo-500/20"></div>
                    </div>
                </div> */}

                {/* Competition Projects Section */}
                <div className="mb-8 text-center sm:mb-12 lg:mb-16">
                    <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl text-zinc-700">Competition Projects</h2>
                </div>

                {/* Competition Projects Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 sm:gap-8 lg:gap-10">
                    {/* Tara Project - Enhanced */}
                    <div className="group relative bg-gradient-to-br from-white to-gray-50 border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] transform-gpu">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-gradient-to-br via-transparent from-orange-500/5 to-pink-500/5"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8 from-orange-200/20"></div>

                        {/* Image Section */}
                        <div className="overflow-hidden relative">
                            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                                <Image src={Taracover} alt="Tara: Teman Netra" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 from-black/20 group-hover:opacity-100"></div>

                                {/* Achievement Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">🏆 3rd Winner</div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 sm:p-8">
                            <div className="mb-4">
                                <h6 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 sm:text-2xl group-hover:text-orange-600">Tara: Teman Netra</h6>
                                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                            </div>

                            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">UX Challenge 4C National Competition 2022</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded-full border border-orange-200">UX Design</span>
                                <span className="px-3 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full border border-pink-200">Accessibility</span>
                            </div>

                            <Link
                                href="https://www.figma.com/proto/b86GR8eEEKJ78LqUPpvN3Q/TARA--Copy-?page-id=0%3A1&node-id=1-2&viewport=398%2C354%2C0.36&t=ACxUP8MQamtJUCoS-1&scaling=contain&content-scaling=fixed"
                                target="_blank"
                                className="inline-flex justify-center items-center px-6 py-3 w-full font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl transition-all duration-300 group/btn hover:from-orange-600 hover:to-pink-600 hover:scale-105 hover:shadow-lg shadow-orange-500/25"
                            >
                                View Project
                                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Neosen Project - Enhanced */}
                    <div className="group relative bg-gradient-to-br from-white to-gray-50 border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] transform-gpu">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-gradient-to-br via-transparent from-blue-500/5 to-purple-500/5"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8 from-blue-200/20"></div>

                        {/* Image Section */}
                        <div className="overflow-hidden relative">
                            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                                <Image src={Neosen} alt="Neosen" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 from-black/20 group-hover:opacity-100"></div>

                                {/* Achievement Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">🎯 Top 10</div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 sm:p-8">
                            <div className="mb-4">
                                <h6 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 sm:text-2xl group-hover:text-blue-600">Neosen</h6>
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            </div>

                            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">UX Competition Find IT Universitas Gadjah Mada 2023</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full border border-blue-200">UX Research</span>
                                <span className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full border border-purple-200">Prototyping</span>
                            </div>

                            <Link
                                href="https://www.canva.com/design/DAFkBYVKI2w/r_a_DTxyh5NPQOHbM7fP-A/edit?utm_content=DAFkBYVKI2w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                target="_blank"
                                className="inline-flex justify-center items-center px-6 py-3 w-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl transition-all duration-300 group/btn hover:from-blue-600 hover:to-purple-600 hover:scale-105 hover:shadow-lg shadow-blue-500/25"
                            >
                                View Project
                                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Galang Project - Enhanced */}
                    <div className="group relative bg-gradient-to-br from-white to-gray-50 border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] transform-gpu md:col-span-2 xl:col-span-1">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-gradient-to-br via-transparent from-green-500/5 to-emerald-500/5"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8 from-green-200/20"></div>

                        {/* Image Section */}
                        <div className="overflow-hidden relative">
                            <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 aspect-video">
                                <Image src={Galang} alt="Galang" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 from-black/20 group-hover:opacity-100"></div>

                                {/* Achievement Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">🏆 3rd Winner</div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 sm:p-8">
                            <div className="mb-4">
                                <h6 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 sm:text-2xl group-hover:text-green-600">Galang</h6>
                                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                            </div>

                            <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">UI/UX Information System Competition 2022 - UPN Veteran Jawa Timur</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full border border-green-200">UI Design</span>
                                <span className="px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full border border-emerald-200">System Design</span>
                            </div>

                            <Link
                                href="https://www.figma.com/proto/wgdTrZLT8oZuf6tshohjbZ/Galang-Pitchdeck?page-id=0%3A1&node-id=1-5&viewport=103%2C491%2C0.07&t=SaOh8eqF1UxWcxY8-1&scaling=contain&content-scaling=fixed"
                                target="_blank"
                                className="inline-flex justify-center items-center px-6 py-3 w-full font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl transition-all duration-300 group/btn hover:from-green-600 hover:to-emerald-600 hover:scale-105 hover:shadow-lg shadow-green-500/25"
                            >
                                View Project
                                <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
