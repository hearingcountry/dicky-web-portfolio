import { posts } from "../../utils/dataPost";
import Image from "next/image";
import Link from "next/link";

export default function Section3() {
    return (
        <section className="py-24 bg-white sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-700 sm:text-4xl">Latest Posts</h2>
                    <p className="mt-2 text-lg leading-8 text-zinc-500">Learn how to grow your business with our expert advice.</p>
                </div>
                <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 auto-rows-fr sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="relative flex flex-col justify-end px-8 pb-8 overflow-hidden transition-all duration-300 bg-gray-900 group isolate rounded-2xl pt-80 sm:pt-48 lg:pt-80">
                            <Image width={500} height={500} src={post.imageUrl} alt="" className="absolute inset-0 object-cover w-full h-full transition-all duration-300 group-hover:scale-125 -z-10" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            <div className="flex flex-wrap items-center overflow-hidden text-sm leading-6 text-gray-300 gap-y-1">
                                <time dateTime={post.datetime} className="mr-8">
                                    {post.date}
                                </time>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                        </article>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button>
                        <Link
                            href="/post"
                            className="px-16 py-4 text-sm font-semibold text-white border border-orange-200 rounded-md bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                        >
                            Show All Posts{" "}
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
}
