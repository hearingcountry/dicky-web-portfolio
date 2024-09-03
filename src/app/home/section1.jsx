import Comjam from "./Comjam Light.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
    return (
        <section className="relative isolate pt-14">
            <div className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-300 to-fuchsia-300 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <svg className="absolute inset-0 -z-10 h-full w-full stroke-green-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                <defs>
                    <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
            </svg>
            <div className="py-24 sm:py-32 lg:pb-40">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="text-[42px] leading-tight font-bold tracking-normal text-zinc-700 md:text-6xl lg:text-8xl">
                            Hello Folks! <span className="text-transparent bg-clip-text text-primary">Welcome</span> to the my journey
                        </h1>

                        <p className="mt-6 font-medium leading-8 md:mt-8 lg:mt-12 text-md md:text-2xl text-zinc-400">A visual designer who live in Indonesia, experienced 2 years in mobile apps design, web design, and .</p>
                        <div className="flex items-center justify-center mt-10 group gap-x-6">
                            <button>
                                <Link
                                    href="/project"
                                    className="px-8 py-4 text-sm font-semibold text-white border border-orange-500 rounded-md bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                                >
                                    Show Project{" "}
                                </Link>
                            </button>
                            <button>
                                <Link href="/about" className="text-sm font-semibold leading-6 text-orange-300 animate-bounce lg:text-xl">
                                    Get in Touch <span aria-hidden="true">→</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="flow-root mt-24 sm:mt-32">
                        <div className="p-2 -m-2 rounded-xl bg-orange-50 ring-1 ring-inset ring-orange-500/20 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <Image src={Comjam} alt="Comjam" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
