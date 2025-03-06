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
        <main className="relative flex flex-col items-center justify-between py-32">
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
            <h2 className="text-4xl font-bold tracking-tight text-zinc-700">Featured Profesional Work</h2>
            <div className="box-border flex justify-center gap-8 mt-12 max-w-7xl">
                <div className="relative flex flex-col w-1/2 bg-white border rounded-lg shadow-sm hover:border-orange-500 hover:shadow-lg border-slate-200">
                    <div className="relative m-2.5 overflow-hidden text-white rounded-md">
                        <Image src={Taracover} alt="card-image" className="w-full aspect-video" />
                    </div>
                    <div className="p-4">
                        <h6 className="mb-2 text-xl font-semibold text-slate-800">Maxcloud Cloud Compute</h6>
                        <p className="font-light leading-normal text-slate-600">Maxcloud is a cloud service platform that offers various features such as VPS, cloud compute, and bare metal servers.</p>
                    </div>
                    <div className="px-4 pt-0 pb-4 mt-2">
                        <button
                            className="px-4 py-2 text-sm text-center text-white transition-all border border-transparent rounded-md shadow-md bg-primary hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Read more
                        </button>
                    </div>
                </div>
            </div>
            <h2 className="py-12 text-3xl font-bold tracking-tight text-zinc-700">Competition Project</h2>
            <div className="box-border flex justify-between gap-8 max-w-7xl">
                <div className="relative flex flex-col w-1/3 bg-white border rounded-lg shadow-sm hover:border-orange-500 hover:shadow-lg border-slate-200">
                    <div className="relative m-2.5 overflow-hidden text-white rounded-md">
                        <Image src={Taracover} alt="card-image" className="w-full aspect-video" />
                    </div>
                    <div className="p-4">
                        <h6 className="mb-2 text-xl font-semibold text-slate-800">Tara: Teman Netra</h6>
                        <p className="font-light leading-normal text-slate-600">3rd Winner of UX Challenge 4C National Competition 2022</p>
                    </div>
                    <div className="px-4 pt-0 pb-4 mt-2">
                        <button>
                            <Link
                                href="https://www.figma.com/proto/0RaQGQfFRaxtEXRCsITkip/TARA?type=design&node-id=1-2&t=2hT6pwMZl5LFGkvp-0&scaling=contain&page-id=0%3A1&fuid=890212016972465992"
                                className="px-4 py-2 text-sm text-center text-white transition-all border border-transparent rounded-md shadow-md bg-primary hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Read more
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="relative flex flex-col w-1/3 bg-white border rounded-lg shadow-sm hover:border-orange-500 hover:shadow-lg border-slate-200">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <Image src={Neosen} alt="card-image" className="w-full aspect-video" />
                    </div>
                    <div className="p-4">
                        <h6 className="mb-2 text-xl font-semibold text-slate-800">Neosen</h6>
                        <p className="font-light leading-normal text-slate-600">Top 10 of UX Competition Find IT Universitas Gadjah Mada 2023</p>
                    </div>
                    <div className="px-4 pt-0 pb-4 mt-2">
                        <button>
                            <Link
                                href="https://www.figma.com/proto/Kuiv2d7OMwlpdwfazMiaIy/Find-IT?type=design&node-id=848-24167&t=urp1Tnr5mDFLb8iY-0&scaling=scale-down&page-id=824%3A21978&starting-point-node-id=848%3A24167&show-proto-sidebar=1&fuid=890212016972465992"
                                target="_blank"
                                className="px-4 py-2 text-sm text-center text-white transition-all border border-transparent rounded-md shadow-md bg-primary hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Read more
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="relative flex flex-col w-1/3 bg-white border rounded-lg shadow-sm hover:border-orange-500 hover:shadow-lg border-slate-200">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <Image src={Galang} alt="card-image" className="w-full aspect-video" />
                    </div>
                    <div className="p-4">
                        <h6 className="mb-2 text-xl font-semibold text-slate-800">Galang</h6>
                        <p className="font-light leading-normal text-slate-600">3rd Winner of UI/UX Information System Competition 2022 - UPN Veteran Jawa Timur</p>
                    </div>
                    <div className="px-4 pt-0 pb-4 mt-2">
                        <button>
                            <Link
                                href="https://www.figma.com/proto/wgdTrZLT8oZuf6tshohjbZ/Galang-Pitchdeck?type=design&t=2hT6pwMZl5LFGkvp-0&scaling=contain&page-id=0%3A1&node-id=1-5&fuid=890212016972465992"
                                target="_blank"
                                className="px-4 py-2 text-sm text-center text-white transition-all border border-transparent rounded-md shadow-md bg-primary hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                {" "}
                                Read more
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
