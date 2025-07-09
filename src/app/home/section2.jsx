import Image from "next/image";
import Link from "next/link";
import ComjamDark from "../../image/ComjamDark.webp";

export default function Section2() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Animated Background Elements */}
            <div className="overflow-hidden absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br rounded-full blur-3xl animate-pulse from-orange-500/10 to-red-500/10"></div>
                <div className="absolute right-1/4 bottom-1/3 w-80 h-80 bg-gradient-to-br rounded-full blur-3xl delay-1000 animate-pulse from-blue-500/10 to-purple-500/10"></div>
            </div>

            <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
                {/* Enhanced Header */}
                <div className="mb-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r rounded-full border backdrop-blur-sm from-orange-500/20 to-red-500/20 border-orange-500/30">
                        <span className="mr-3 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                        <span className="text-sm font-semibold tracking-wide text-orange-300">Professional Work</span>
                    </div>
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white">Featured</span>
                        <span className="ml-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Projects</span>
                    </h2>
                </div>

                {/* Enhanced Project Card */}
                <div className="mx-auto max-w-6xl">
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] transform-gpu">
                        {/* Enhanced Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br via-transparent from-orange-500/5 to-red-500/5"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl to-transparent rounded-full blur-3xl from-orange-200/10"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr to-transparent rounded-full blur-2xl from-red-200/10"></div>

                        <div className="grid relative lg:grid-cols-2 lg:gap-0">
                            {/* Enhanced Content Side */}
                            <div className="flex flex-col order-1 justify-center p-8 md:p-12 lg:p-16 lg:order-1">
                                <div className="space-y-8">
                                    {/* Project Title with enhanced styling */}
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="mr-3 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
                                            <span className="text-sm font-semibold tracking-wide text-gray-600 uppercase">Featured Project</span>
                                        </div>
                                        <h3 className="mb-4 text-3xl font-bold text-gray-800 transition-colors duration-300 md:text-4xl lg:text-5xl group-hover:text-gray-900">Rapspoint</h3>
                                        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full shadow-lg"></div>
                                    </div>

                                    {/* Mobile Image - Enhanced */}
                                    <div className="block lg:hidden">
                                        <div className="relative mx-auto w-full max-w-md">
                                            <div className="overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border shadow-2xl border-gray-200/50">
                                                <Image src={ComjamDark} alt="Rapspoint Dashboard" width={600} height={400} className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                                                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/10"></div>

                                                {/* Mobile Achievement Badge */}
                                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">✓ Live Project</div>
                                            </div>
                                            {/* Enhanced Mobile Floating Elements */}
                                            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl opacity-70 blur-xl"></div>
                                            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-xl opacity-70 blur-xl"></div>
                                        </div>
                                    </div>

                                    {/* Enhanced Description */}
                                    <div className="space-y-4">
                                        <p className="text-sm font-medium leading-relaxed text-gray-700">
                                            A comprehensive platform designed to streamline business operations with intuitive user interface and powerful functionality. Built with modern technologies and user-centered design principles.
                                        </p>

                                        {/* Additional Features List */}
                                        <div className="grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
                                            <div className="flex items-center">
                                                <svg className="mr-2 w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                User-Centered Design
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="mr-2 w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Modern Technologies
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="mr-2 w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Scalable Architecture
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="mr-2 w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Performance Optimized
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced CTA Button */}
                                    <div className="flex flex-col gap-4 sm:flex-row">
                                        <Link
                                            href="/portfolio"
                                            className="px-8 py-4 text-sm font-semibold text-center text-white rounded-md border border-orange-500 bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                                        >
                                            Show Portfolio{" "}
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Desktop Image Side */}
                            <div className="hidden order-2 p-8 lg:flex lg:items-center lg:justify-center md:p-12 lg:p-8 lg:order-2">
                                <div className="relative mx-auto w-full max-w-lg">
                                    {/* Enhanced Main Image Container */}
                                    <div className="overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl border shadow-2xl transition-transform duration-700 border-gray-200/50 group-hover:scale-105">
                                        <Image src={ComjamDark} alt="Rapspoint Dashboard" width={600} height={400} className="object-cover w-full h-auto transition-all duration-500 group-hover:brightness-110" />

                                        {/* Enhanced Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent transition-all duration-300 from-black/10 group-hover:from-black/5"></div>

                                        {/* Achievement Badge */}
                                        <div className="absolute top-6 left-6 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg">✓ Live Project</div>

                                        {/* Stats Badge */}
                                        <div className="absolute bottom-6 left-6 px-4 py-2 text-sm font-semibold text-gray-800 rounded-full border border-gray-200 shadow-lg backdrop-blur-sm bg-white/90">🚀 Active Users: 10K+</div>
                                    </div>

                                    {/* Enhanced Floating Elements */}
                                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-80"></div>
                                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-2xl opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-80"></div>

                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 blur-xl transition-opacity duration-500 transform scale-110 from-orange-500/20 to-red-500/20 group-hover:opacity-100"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br to-transparent rounded-br-full from-orange-500/10"></div>
                        <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tl to-transparent rounded-tl-full from-red-500/10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
