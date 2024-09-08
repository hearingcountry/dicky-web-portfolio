import Image from "next/image";
import Link from "next/link";

const timeline = [
    {
        name: "Telkomsel Branch Malang",
        description: "Product Researcher Intern",
        date: "Oct 2023 - Dec 2023",
        dateTime: "2023-10",
    },
    {
        name: "PT Raps Maju Bersama",
        description: "Product Designer",
        date: "Feb 2024 - now",
        dateTime: "2023-10",
    },
    {
        name: "PT Awan Data Indonesia",
        description: "UI/UX Designer",
        date: "Apr 2024 - now",
        dateTime: "2023-10",
    },
];

export default function About() {
    return (
        <main className="pb-32 isolate md:pb-40">
            {/* Hero section */}
            <div className="relative overflow-hidden isolate -z-10 bg-gradient-to-b from-orange-100/20">
                <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-orange-600/10 ring-1 ring-orange-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
                <div className="px-6 py-32 mx-auto max-w-7xl md:py-40 lg:px-8">
                    <div className="max-w-2xl mx-auto lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h1 className="max-w-2xl text-4xl font-bold leading-[48px] md:leading-[64px] tracking-tight md:text-5xl text-zinc-700 lg:col-span-2 xl:col-auto">We’re a passionate group of people working</h1>
                        <div className="max-w-xl mt-6 lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p className="text-lg leading-8 text-zinc-500">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo.
                            </p>
                            <button className="mt-12">
                                <Link
                                    href="/project"
                                    className="px-8 py-4 text-sm font-semibold text-white border border-orange-500 rounded-md bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                                >
                                    Hire Me{" "}
                                </Link>
                            </button>
                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                            alt=""
                            className="mt-12 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                        />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 -z-10 bg-gradient-to-t from-white sm:h-32" />
            </div>

            {/* Timeline section */}
            <div className="px-6 mx-auto -mt-8 max-w-7xl lg:px-8">
                <h3 className="mb-16 text-3xl font-semibold text-center text-primary">Work Experiences</h3>
                <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {timeline.map((item) => (
                        <div key={item.name}>
                            <time dateTime={item.dateTime} className="flex items-center text-sm font-semibold leading-6 text-orange-600">
                                <svg viewBox="0 0 4 4" className="flex-none w-1 h-1 mr-4" aria-hidden="true">
                                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                                </svg>
                                {item.date}
                                <div className="absolute w-screen h-px -ml-2 -translate-x-full bg-zinc-700/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true" />
                            </time>
                            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-zinc-700">{item.name}</p>
                            <p className="mt-1 text-base leading-7 text-zinc-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Logo cloud */}
            <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
                <div className="relative px-6 py-24 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16">
                    <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-white sm:text-4xl">Our customers love us</h2>
                    <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">
                        Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident cillum in nisi adipisicing officia excepteur tempor deserunt.
                    </p>
                    <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-20 gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-5">
                        <img className="object-contain w-full col-span-2 max-h-12 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" width={158} height={48} />
                        <img className="object-contain w-full col-span-2 max-h-12 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg" alt="Reform" width={158} height={48} />
                        <img className="object-contain w-full col-span-2 max-h-12 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" width={158} height={48} />
                        <img className="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" width={158} height={48} />
                        <img className="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" width={158} height={48} />
                    </div>
                    <div className="absolute right-0 -top-24 -z-10 transform-gpu blur-3xl" aria-hidden="true">
                        <div
                            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                            style={{
                                clipPath:
                                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl leading-[42px] md:leading-[48px] font-bold tracking-tight text-zinc-700 md:text-4xl">We approach the workplace as something that adds to our lives and adds value to world.</h2>
                    <p className="mt-6 text-base leading-7 text-gray-600">Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.</p>
                </div>
                <div className="flex flex-col max-w-2xl gap-8 mx-auto mt-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                    <div className="flex flex-col-reverse justify-between p-8 gap-x-16 gap-y-8 rounded-2xl bg-gray-50 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">250k</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-gray-900">Users on the platform</p>
                            <p className="mt-2 text-base leading-7 text-gray-600">Vel labore deleniti veniam consequuntur sunt nobis.</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between p-8 bg-gray-900 gap-x-16 gap-y-8 rounded-2xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">$8.9 billion</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">We’re proud that our customers have made over $8 billion in total revenue.</p>
                            <p className="mt-2 text-base leading-7 text-gray-400">Eu duis porta aliquam ornare. Elementum eget magna egestas.</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse justify-between p-8 bg-orange-600 gap-x-16 gap-y-8 rounded-2xl sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <p className="flex-none text-3xl font-bold tracking-tight text-white">401,093</p>
                        <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p className="text-lg font-semibold tracking-tight text-white">Transactions this year</p>
                            <p className="mt-2 text-base leading-7 text-orange-200">Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
