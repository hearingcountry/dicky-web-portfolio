import Image from "next/image";
import { posts } from "../../utils/dataPost";

export default function Post() {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen">
            <div className="py-32 bg-white md:py-40">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="max-w-2xl mx-auto lg:max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-700">From the blog</h2>
                        <p className="mt-2 text-lg leading-8 text-zinc-500">Learn how to grow your business with our expert advice.</p>
                        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                            {posts.map((post) => (
                                <article key={post.id} className="relative flex flex-col gap-8 isolate md:flex-row">
                                    <div className="relative aspect-square md:w-96">
                                        <img src={post.imageUrl} alt="" className="absolute inset-0 object-cover w-full h-full rounded-2xl bg-zinc-50" />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/10" />
                                    </div>
                                    <div>
                                        <div className="flex items-center text-xs gap-x-4">
                                            <time dateTime={post.datetime} className="text-zinc-500">
                                                {post.date}
                                            </time>
                                            <a href={post.category.link} className="relative z-10 rounded-full bg-zinc-50 px-3 py-1.5 font-medium text-zinc-500 hover:bg-zinc-100">
                                                {post.category.title}
                                            </a>
                                        </div>
                                        <div className="relative max-w-xl group">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-700 group-hover:text-zinc-500">
                                                <a href={post.href}>
                                                    <span className="absolute inset-0" />
                                                    {post.title}
                                                </a>
                                            </h3>
                                            <p className="mt-5 text-sm leading-6 text-zinc-500">{post.description}</p>
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
