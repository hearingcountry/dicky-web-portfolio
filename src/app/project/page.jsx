import Image from "next/image";
import Link from "next/link";
import Taracover from "../../image/project/tara-cover.webp";
import Galang from "../../image/project/galang.webp";
import Neosen from "../../image/project/neosen-video.webp";

export const metadata = {
    title: "Dicky Surya | Project",
    description: "Project Dicky Surya Nanda",
};

export default function Project() {
    return (
        <main className="relative flex flex-col items-center justify-between py-16 sm:py-24 lg:py-32">
            <div className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80" aria-hidden="true">
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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Featured Professional Work Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-700 mb-4">
                        Featured Professional Work
                    </h2>
                </div>

                {/* Professional Work Grid */}
                <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 mb-16 sm:mb-20 lg:mb-24 max-w-6xl mx-auto">
                    
                    {/* Project 1 - Enhanced Blue Theme */}
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] flex-1 max-w-lg hover:rotate-1 transform-gpu">
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.3),transparent_50%)]"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                        
                        <div className="relative p-8 lg:p-10 text-white">
                            {/* Year & Badge with better styling */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                                    <span className="text-blue-200 text-sm font-semibold tracking-wide">2024</span>
                                </div>
                                <div className="px-4 py-2.5 bg-gradient-to-r from-blue-500/40 to-indigo-500/40 backdrop-blur-md rounded-full border border-blue-300/30 shadow-lg">
                                    <span className="text-sm font-semibold flex items-center">
                                        <span className="mr-2">💼</span>
                                        Professional Work
                                    </span>
                                </div>
                            </div>

                            {/* Enhanced Content */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                        Streamlining Car Discovery Process with Recent Activity
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full"></div>
                                </div>
                                
                                <p className="text-blue-100/90 leading-relaxed text-sm lg:text-base font-medium">
                                    Enhancing the car-buying journey with a smarter way to revisit past interactions, ensuring they pick up where they left off and make informed decisions.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1.5 bg-blue-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-blue-400/30">
                                        UX Research
                                    </span>
                                    <span className="px-3 py-1.5 bg-indigo-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-indigo-400/30">
                                        UI Design
                                    </span>
                                    <span className="px-3 py-1.5 bg-purple-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-purple-400/30">
                                        Frontend
                                    </span>
                                </div>

                                <Link
                                    href="#"
                                    className="group/btn inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/30 hover:from-white/25 hover:to-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-blue-500/25"
                                >
                                    <span className="mr-3">View Project</span>
                                    <div className="relative overflow-hidden">
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Enhanced Visual Mockup */}
                        <div className="relative mx-6 mb-6">
                            <div className="relative h-48 lg:h-56 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl border border-white/30 overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                                <Image 
                                    src={Taracover} 
                                    alt="Car Discovery Project" 
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110" 
                                />
                                
                                {/* Floating UI Elements */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-green-500 rounded-full text-xs font-semibold text-white shadow-lg">
                                    ✓ Live Project
                                </div>
                                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-tr-full"></div>
                    </div>
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.03] flex-1 max-w-lg hover:rotate-1 transform-gpu">
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.3),transparent_50%)]"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                        
                        <div className="relative p-8 lg:p-10 text-white">
                            {/* Year & Badge with better styling */}
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                                    <span className="text-blue-200 text-sm font-semibold tracking-wide">2024</span>
                                </div>
                                <div className="px-4 py-2.5 bg-gradient-to-r from-blue-500/40 to-indigo-500/40 backdrop-blur-md rounded-full border border-blue-300/30 shadow-lg">
                                    <span className="text-sm font-semibold flex items-center">
                                        <span className="mr-2">💼</span>
                                        Professional Work
                                    </span>
                                </div>
                            </div>

                            {/* Enhanced Content */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                        Streamlining Car Discovery Process with Recent Activity
                                    </h3>
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full"></div>
                                </div>
                                
                                <p className="text-blue-100/90 leading-relaxed text-sm lg:text-base font-medium">
                                    Enhancing the car-buying journey with a smarter way to revisit past interactions, ensuring they pick up where they left off and make informed decisions.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="px-3 py-1.5 bg-blue-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-blue-400/30">
                                        UX Research
                                    </span>
                                    <span className="px-3 py-1.5 bg-indigo-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-indigo-400/30">
                                        UI Design
                                    </span>
                                    <span className="px-3 py-1.5 bg-purple-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-purple-400/30">
                                        Frontend
                                    </span>
                                </div>

                                <Link
                                    href="#"
                                    className="group/btn inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-md text-white font-semibold rounded-2xl border border-white/30 hover:from-white/25 hover:to-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-blue-500/25"
                                >
                                    <span className="mr-3">View Project</span>
                                    <div className="relative overflow-hidden">
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Enhanced Visual Mockup */}
                        <div className="relative mx-6 mb-6">
                            <div className="relative h-48 lg:h-56 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl border border-white/30 overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                                <Image 
                                    src={Taracover} 
                                    alt="Car Discovery Project" 
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110" 
                                />
                                
                                {/* Floating UI Elements */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-green-500 rounded-full text-xs font-semibold text-white shadow-lg">
                                    ✓ Live Project
                                </div>
                                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-tr-full"></div>
                    </div>

                </div>
                {/* Competition Projects Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-700">
                        Competition Projects
                    </h2>
                </div>

                {/* Competition Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                    
                    {/* Tara Project - Enhanced */}
                    <div className="group relative bg-gradient-to-br from-white to-gray-50 border-0 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02] transform-gpu">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-pink-500/5"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                        
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                            <div className="aspect-video relative bg-gradient-to-br from-gray-100 to-gray-200">
                                <Image 
                                    src={Taracover} 
                                    alt="Tara: Teman Netra" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Achievement Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                    🏆 3rd Winner
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 sm:p-8">
                            <div className="mb-4">
                                <h6 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                                    Tara: Teman Netra
                                </h6>
                                <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                            </div>
                            
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                                UX Challenge 4C National Competition 2022
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full border border-orange-200">
                                    UX Design
                                </span>
                                <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full border border-pink-200">
                                    Accessibility
                                </span>
                            </div>

                            <Link
                                href="https://www.figma.com/proto/0RaQGQfFRaxtEXRCsITkip/TARA?type=design&node-id=1-2&t=2hT6pwMZl5LFGkvp-0&scaling=contain&page-id=0%3A1&fuid=890212016972465992"
                                target="_blank"
                                className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-orange-500/25"
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
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                        
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                            <div className="aspect-video relative bg-gradient-to-br from-gray-100 to-gray-200">
                                <Image 
                                    src={Neosen} 
                                    alt="Neosen" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Achievement Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                    🎯 Top 10
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 sm:p-8">
                            <div className="mb-4">
                                <h6 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    Neosen
                                </h6>
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            </div>
                            
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                                UX Competition Find IT Universitas Gadjah Mada 2023
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                                    UX Research
                                </span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full border border-purple-200">
                                    Prototyping
                                </span>
                            </div>

                            <Link
                                href="https://www.figma.com/proto/Kuiv2d7OMwlpdwfazMiaIy/Find-IT?type=design&node-id=848-24167&t=urp1Tnr5mDFLb8iY-0&scaling=scale-down&page-id=824%3A21978&starting-point-node-id=848%3A24167&show-proto-sidebar=1&fuid=890212016972465992"
                                target="_blank"
                                className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-blue-500/25"
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
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-200/20 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
                        
                        {/* Image Section */}
                        <div className="relative overflow-hidden">
                            <div className="aspect-video relative bg-gradient-to-br from-gray-100 to-gray-200">
                                <Image 
                                    src={Galang} 
                                    alt="Galang" 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Achievement Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                    🏆 3rd Winner
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="relative p-6 sm:p-8">
                            <div className="mb-4">
                                <h6 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                                    Galang
                                </h6>
                                <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                            </div>
                            
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                                UI/UX Information System Competition 2022 - UPN Veteran Jawa Timur
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full border border-green-200">
                                    UI Design
                                </span>
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                                    System Design
                                </span>
                            </div>

                            <Link
                                href="https://www.figma.com/proto/wgdTrZLT8oZuf6tshohjbZ/Galang-Pitchdeck?type=design&t=2hT6pwMZl5LFGkvp-0&scaling=contain&page-id=0%3A1&node-id=1-5&fuid=890212016972465992"
                                target="_blank"
                                className="group/btn inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-green-500/25"
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
