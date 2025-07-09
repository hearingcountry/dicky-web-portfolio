import { posts } from "../../utils/dataPost";
import Image from "next/image";
import Link from "next/link";

export default function Section3() {
    return (
        <section className="py-16 bg-white sm:py-20 md:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
                    <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-zinc-800 sm:mb-4">Latest Posts</h2>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-2 xl:grid-cols-3 sm:gap-8 lg:gap-10">
                    {posts.map((post, index) => {
                        // Define different accent themes for each card
                        const themes = [
                            {
                                accentGradient: "from-blue-500 to-indigo-500",
                                badgeGradient: "from-blue-500 to-indigo-500",
                                decorGradient: "from-blue-500/10 to-indigo-500/10",
                                glowColor: "from-blue-500/20 to-indigo-500/20",
                                textAccent: "text-blue-600",
                                lightAccent: "text-blue-500",
                            },
                            {
                                accentGradient: "from-purple-500 to-violet-500",
                                badgeGradient: "from-purple-500 to-violet-500",
                                decorGradient: "from-purple-500/10 to-violet-500/10",
                                glowColor: "from-purple-500/20 to-violet-500/20",
                                textAccent: "text-purple-600",
                                lightAccent: "text-purple-500",
                            },
                            {
                                accentGradient: "from-emerald-500 to-teal-500",
                                badgeGradient: "from-emerald-500 to-teal-500",
                                decorGradient: "from-emerald-500/10 to-teal-500/10",
                                glowColor: "from-emerald-500/20 to-teal-500/20",
                                textAccent: "text-emerald-600",
                                lightAccent: "text-emerald-500",
                            },
                        ];

                        const theme = themes[index % themes.length];

                        return (
                            <article
                                key={post.id}
                                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.03] transform-gpu border border-gray-100"
                            >
                                {/* Decorative Background Elements */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${theme.decorGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${theme.decorGradient} rounded-full blur-3xl opacity-50`}></div>
                                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${theme.decorGradient} rounded-full blur-2xl opacity-30`}></div>

                                {/* Image Section - Moved to Top */}
                                <div className="relative">
                                    <div className="overflow-hidden relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                                        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/10"></div>
                                        <Image width={500} height={300} src={post.imageUrl} alt={post.title} className="object-cover w-full h-full filter transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110" />

                                        {/* Reading Time Badge */}
                                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold rounded-full shadow-lg border border-white/50">📖 5 min read</div>
                                    </div>

                                    {/* Glow Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${theme.glowColor} blur-xl transform scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                </div>

                                {/* Content Section */}
                                <div className="relative p-6 sm:p-8">
                                    {/* Date & Category Badge */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="flex items-center space-x-2">
                                            <div className={`w-2.5 h-2.5 bg-gradient-to-r ${theme.accentGradient} rounded-full animate-pulse`}></div>
                                            <time dateTime={post.datetime} className="text-sm font-semibold tracking-wide text-gray-600">
                                                {post.date}
                                            </time>
                                        </div>
                                        <div className={`px-3 py-1.5 bg-gradient-to-r ${theme.badgeGradient} text-white backdrop-blur-sm rounded-full shadow-lg border border-white/20`}>
                                            <span className="flex items-center text-xs font-semibold">
                                                <span className="mr-1.5">📝</span>
                                                Article
                                            </span>
                                        </div>
                                    </div>

                                    {/* Enhanced Content */}
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className={`text-xl sm:text-2xl font-bold leading-tight mb-3 text-gray-800 group-hover:${theme.textAccent} transition-colors duration-300`}>
                                                <a href={post.href} className="focus:outline-none">
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <div className={`w-16 h-1.5 bg-gradient-to-r ${theme.accentGradient} rounded-full shadow-sm`}></div>
                                        </div>

                                        <p className="text-sm font-medium leading-relaxed text-gray-600 line-clamp-3">
                                            {post.description || "Discover insights and tips that will help you grow your business and enhance your design skills with practical advice from industry experts."}
                                        </p>

                                        {/* Read More Button */}
                                        <div className="pt-2">
                                            <Link
                                                href="/project"
                                                className="px-4 py-3 text-sm font-semibold text-white rounded-md border border-orange-500 bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                                            >
                                                Read Post{" "}
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Top Border Accent */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.accentGradient} rounded-t-3xl`}></div>
                            </article>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-12 sm:mt-16 lg:mt-20">
                    <button>
                        <Link
                            href="/project"
                            className="px-8 py-4 text-sm font-semibold text-white rounded-md border border-orange-500 bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                        >
                            Show More Posts{" "}
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
}
