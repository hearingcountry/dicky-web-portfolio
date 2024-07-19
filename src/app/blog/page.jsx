import Image from "next/image";
import { posts } from "../../utils/dataBlog";

export default function Blog() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen">
            <div className="py-24 bg-white md:py-32">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="max-w-2xl mx-auto lg:max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                            {posts.map((post) => (
                                <article key={post.id} className="relative flex flex-col gap-8 isolate md:flex-row">
                                    <div className="relative aspect-square md:w-96">
                                        <img src={post.imageUrl} alt="" className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-gray-50" />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div>
                                        <div className="flex items-center text-xs gap-x-4">
                                            <time dateTime={post.datetime} className="text-gray-500">
                                                {post.date}
                                            </time>
                                            <a href={post.category.link} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                                {post.category.title}
                                            </a>
                                        </div>
                                        <div className="relative max-w-xl group">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                                <a href={post.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                                        </div>
                                        <div className="flex pt-6 mt-6 border-t border-gray-900/5">
                                            <div className="relative flex items-center gap-x-4">
                                                <img src={post.author.imageUrl} alt="" className="w-10 h-10 rounded-full bg-gray-50" />
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-gray-900">
                                                        <a href={post.author.href}>
                                                            <span className="absolute inset-0" />
                                                            {post.author.name}
                                                        </a>
                                                    </p>
                                                    <p className="text-gray-600">{post.author.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
