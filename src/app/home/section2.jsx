import Image from "next/image";
import Link from "next/link";
import ComjamDark from "../../image/ComjamDark.webp";

export default function Section2() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Enhanced Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 mb-6">
                        <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse mr-3"></span>
                        <span className="text-orange-300 text-sm font-semibold tracking-wide">Professional Work</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                            Featured 
                        </span>
                        <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent ml-4">
                            Projects
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Showcasing innovative solutions that drive business growth and enhance user experiences
                    </p>
                </div>

                {/* Enhanced Project Card */}
                <div className="max-w-6xl mx-auto">
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] transform-gpu">
                        
                        {/* Enhanced Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-200/10 to-transparent rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-200/10 to-transparent rounded-full blur-2xl"></div>

                        <div className="relative grid lg:grid-cols-2 lg:gap-0">
                            
                            {/* Enhanced Content Side */}
                            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 order-1 lg:order-1">
                                <div className="space-y-8">
                                    
                                    {/* Project Title with enhanced styling */}
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse mr-3"></div>
                                            <span className="text-gray-600 text-sm font-semibold tracking-wide uppercase">Featured Project</span>
                                        </div>
                                        <h3 className="text-3xl mb-4 md:text-4xl lg:text-5xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                            Rapspoint
                                        </h3>
                                        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full shadow-lg"></div>
                                    </div>

                                    {/* Mobile Image - Enhanced */}
                                    <div className="block lg:hidden">
                                        <div className="relative w-full max-w-md mx-auto">
                                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl border border-gray-200/50">
                                                <Image
                                                    src={ComjamDark}
                                                    alt="Rapspoint Dashboard"
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                                                
                                                {/* Mobile Achievement Badge */}
                                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg">
                                                    ✓ Live Project
                                                </div>
                                            </div>
                                            {/* Enhanced Mobile Floating Elements */}
                                            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur-xl opacity-70"></div>
                                            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-xl blur-xl opacity-70"></div>
                                        </div>
                                    </div>

                                    {/* Enhanced Tags */}
                                    <div className="flex flex-wrap gap-3">
                                        <span className="inline-flex items-center px-4 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border border-emerald-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full mr-2.5 animate-pulse"></span>
                                            Product Designer
                                        </span>
                                        <span className="inline-flex items-center px-4 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border border-violet-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <span className="w-2.5 h-2.5 bg-violet-500 rounded-full mr-2.5 animate-pulse"></span>
                                            Frontend Developer
                                        </span>
                                    </div>

                                    {/* Enhanced Description */}
                                    <div className="space-y-4">
                                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                                            A comprehensive platform designed to streamline business operations with intuitive user interface and powerful functionality. Built with modern technologies and user-centered design principles.
                                        </p>
                                        
                                        {/* Additional Features List */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                User-Centered Design
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Modern Technologies
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Scalable Architecture
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Performance Optimized
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced CTA Button */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href="/project"
                                            className="group/btn inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-orange-500/25 text-base lg:text-lg"
                                        >
                                            <span className="mr-3">View Project</span>
                                            <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </Link>
                                        
                                        <button className="inline-flex items-center justify-center px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-orange-500 hover:text-orange-600 transition-all duration-300 hover:scale-105">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            Get In Touch
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Desktop Image Side */}
                            <div className="hidden lg:flex lg:items-center lg:justify-center p-8 md:p-12 lg:p-8 order-2 lg:order-2">
                                <div className="relative w-full max-w-lg mx-auto">
                                    
                                    {/* Enhanced Main Image Container */}
                                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl border border-gray-200/50 group-hover:scale-105 transition-transform duration-700">
                                        <Image
                                            src={ComjamDark}
                                            alt="Rapspoint Dashboard"
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover group-hover:brightness-110 transition-all duration-500"
                                        />
                                        
                                        {/* Enhanced Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent group-hover:from-black/5 transition-all duration-300"></div>
                                        
                                        {/* Achievement Badge */}
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold rounded-full shadow-lg">
                                            ✓ Live Project
                                        </div>
                                        
                                        {/* Stats Badge */}
                                        <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full shadow-lg border border-gray-200">
                                            🚀 Active Users: 10K+
                                        </div>
                                    </div>

                                    {/* Enhanced Floating Elements */}
                                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                    
                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative corner accent */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-br-full"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-red-500/10 to-transparent rounded-tl-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
