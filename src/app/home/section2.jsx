import Image from "next/image";

export default function Section2() {
    return (
        <div className="overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 mb-32 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-primary">Deploy faster</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative px-6 pt-8 overflow-hidden bg-blue-300 isolate sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                            <div className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true" />
                            <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                                <Image
                                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                                    alt="Product screenshot"
                                    width={2432}
                                    height={1442}
                                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                                />
                            </div>
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-primary">Deploy faster</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                        </div>
                    </div>
                    <div className="sm:px-6 lg:px-0">
                        <div className="relative px-6 pt-8 overflow-hidden bg-orange-400 isolate sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                            <div className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white" aria-hidden="true" />
                            <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                                <Image
                                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                                    alt="Product screenshot"
                                    width={2432}
                                    height={1442}
                                    className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                                />
                            </div>
                            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-3xl" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
