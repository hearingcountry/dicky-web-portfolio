import Link from "next/link";
import Profile from "../../image/profile.webp";
import Image from "next/image";

export const metadata = {
    title: "Dicky Surya | About",
    description: "About Dicky Surya Nanda",
};

const timeline = [
    {
        name: "PT Awan Data Indonesia",
        description: "UI/UX Designer",
        details:
            "Led the redesign of a user-centric VPS dashboard using design thinking, from user interviews to wireframing and high-fidelity prototyping, which improved task flow efficiency by 35%. I also developed a modular design system in Figma to streamline collaboration, reducing iteration time and cross-team revisions by 60%. By working closely with engineering and support teams, we identified and resolved key UX friction points, leading to a 25% decrease in reported user issues and increased QA/UAT success rates.",
        date: "Apr 2024 - Mar 2025",
        dateTime: "2024-04",
        location: "Bekasi, ID - WFO",
        link: "https://app.maxcloud.id",
    },
    {
        name: "PT Raps Maju Bersama",
        description: "Product Designer",
        details:
            "Led end-to-end product design and successfully launched key features including a game account marketplace, integrated top-up system, and jockey booking service within tight deadlines, driving early revenue and rapid user growth. I designed a unified top-up and payment experience that reduced transaction time by 40% and scaled to handle over 20,000 monthly transactions. Additionally, I improved SEO strategy, leading to a 300% increase in organic traffic and surpassing 100,000 monthly visits.",
        date: "Feb 2024 - Feb 2025",
        dateTime: "2024-02",
        location: "Bekasi, ID - Remote",
        link: "https://rapspoint.com",
    },
    {
        name: "Telkomsel Branch Malang",
        description: "Product Researcher Intern",
        details:
            "At Telkomsel, I directed research initiatives focused on the Greater Malang area and university students, conducting interviews and in-person surveys with over 100 participants to uncover insights that shaped key MyTelkomsel product decisions and user retention strategies. The findings identified key drivers of product sales growth and influenced strategic direction. I also translated these insights into targeted marketing strategies, improving audience segmentation and boosting the effectiveness of digital promotional campaigns.",
        date: "Oct 2023 - Dec 2023",
        dateTime: "2023-10",
        location: "Malang, ID - Hybrid",
        link: "https://telkomsel.com",
    },
];

const awards = [
    {
        title: "3rd Winner of UI/UX Design Competition ISC 2022",
        position: "3rd Winner",
        issuer: 'UPN "Veteran" Jawa Timur',
        date: "Dec 2022",
        link: "https://drive.google.com/file/d/1FzNvyxqjMscjnucISpWsjEGoS01coE1g/view?usp=drive_link",
    },
    {
        title: "3rd Winner of UI/UX Design Competition Hology 5.0",
        position: "3rd Winner",
        issuer: "Faculty of Computer Science Universitas Brawijaya",
        date: "Nov 2022",
        link: "https://drive.google.com/file/d/1AVBh54LJ-1cVvKBnALQMjajzzE5RLHxj/view?usp=drive_link",
    },
    {
        title: "3rd Winner of UX Challenge 4C National Competition",
        position: "3rd Winner",
        issuer: "Faculty of Computer Science Universitas Brawijaya",
        date: "Oct 2022",
        link: "https://drive.google.com/file/d/1sYfo21vCgnE7KxOvnKPvq3V_fM5fbo_Q/view?usp=drive_link",
    },
    {
        title: "Runner Up of Infographic Competition LINE 2022",
        position: "2nd Winner",
        issuer: "Civil Engineering Student Association, University of Jember",
        date: "Apr 2022",
        link: "https://drive.google.com/file/d/1wqRuRfHqhzaQiwxl8-I7bnHIAXF2OM9F/view?usp=drive_link",
    },
    {
        title: "Finalist of FIND IT UX Competition",
        position: "Big 10",
        issuer: "Faculty of Engineering Universitas Gadjah Mada",
        date: "Jun 2023",
        link: "https://drive.google.com/file/d/1crkz44pNN5nirsIbQ79xiYcU6u19Zdbw/view?usp=drive_link",
    },
];

export default function About() {
    return (
        <main className="isolate pb-32">
            {/* Hero section */}
            <div className="isolate overflow-hidden relative bg-gradient-to-b -z-10 from-orange-100/20">
                <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-orange-600/10 ring-1 ring-orange-50 sm:-mr-80 lg:-mr-96" aria-hidden="true" />
                <div className="px-6 mx-auto mt-12 mb-40 max-w-7xl md:mt-24 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h1 className="max-w-2xl text-4xl font-bold leading-[48px] md:leading-[64px] tracking-tight md:text-5xl text-zinc-700 lg:col-span-2 xl:col-auto">Get in Touch</h1>
                        <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p className="text-base leading-7 md:text-lg md:leading-10 text-zinc-400">
                                {`
                                    Final-year Information Technology student with 1+ year of UI/UX experience in B2B cloud and B2C gaming products. Experienced in end-to-end design, improving dashboards, and building scalable design systems. Awarded 4+ national honors in design and tech. 
                                `}
                            </p>
                            <button className="mt-12">
                                <Link
                                    href="https://drive.google.com/file/d/1mwoCJFqmqFsVqe4Qcj7zyTX2y8fi6itu/view?usp=drive_link"
                                    target="_blank"
                                    className="px-8 py-4 text-sm font-semibold text-white rounded-md border border-orange-500 bg-primary-hover bg-primary lg:text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-100"
                                >
                                    My Resume{" "}
                                </Link>
                            </button>
                        </div>

                        <Image src={Profile} alt="Image Profile" className="mt-12 aspect-[6/5] w-full max-w-md rounded-2xl object-cover sm:mt-16 lg:mt-0 xl:row-span-2 xl:row-end-2 xl:mt-36" />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white -z-10 sm:h-32" />
            </div>

            {/* Timeline section */}
            <div id="experience" className="px-6 mx-auto -mt-8 max-w-7xl lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-2 text-4xl font-bold text-gray-900">Experience Journey</h2>
                    <p className="text-lg text-gray-600">2+ years of crafting digital experiences and building innovative solutions</p>
                </div>

                <div className="mx-auto space-y-6 max-w-5xl">
                    {timeline.map((item) => (
                        <div key={item.name} className="grid grid-cols-1 gap-6 py-6 border-b border-gray-100 md:grid-cols-5 last:border-b-0">
                            <div className="md:col-span-2">
                                <h3 className="mb-1 text-xl font-semibold text-primary">{item.description}</h3>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mb-2 text-gray-600 transition-colors duration-200 hover:text-green-500 hover:underline">
                                    {item.name}
                                </a>
                                <div className="space-y-1 text-sm">
                                    <div className="flex items-center text-gray-500">
                                        <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {item.location}
                                    </div>
                                    <div className="flex items-center font-medium text-gray-900">
                                        <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {item.date}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 text-base leading-7 text-gray-600 md:col-span-3 md:mt-0">{item.details}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Awards Section */}
            <div id="awards" className="px-6 mx-auto mt-20 max-w-7xl lg:px-8">
                <div className="mb-16 text-center">
                    <div className="flex justify-center items-center mb-4">
                        <span className="mr-3 text-4xl">🏆</span>
                        <h2 className="text-4xl font-bold text-gray-900">Awards</h2>
                    </div>
                    <p className="text-lg text-gray-600">Recognition for excellence in design and innovation</p>
                </div>

                <div className="mx-auto space-y-6 max-w-5xl">
                    {awards.map((award, index) => (
                        <div
                            key={award.title}
                            className="overflow-hidden relative bg-gradient-to-r from-white to-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 group hover:shadow-lg hover:border-orange-200"
                        >
                            <div className="p-8">
                                <div className="flex gap-6 justify-between items-start">
                                    <div className="flex-1">
                                        <div className="flex items-center mb-3">
                                            <span className="inline-flex items-center px-3 py-1 mr-4 text-xs font-medium text-orange-500 bg-orange-100 rounded-full">{award.position}</span>
                                            <span className="text-sm font-medium text-gray-500">{award.date}</span>
                                        </div>
                                        <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-orange-500">{award.title}</h3>
                                        <p className="italic text-gray-600">Issued by {award.issuer}</p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a
                                            href={award.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-orange-500 bg-white rounded-lg border border-orange-200 shadow-sm transition-all duration-200 hover:bg-orange-50 hover:border-orange-300 hover:shadow group"
                                        >
                                            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            View Certificate
                                            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative gradient line */}
                            <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 transition-transform duration-500 transform origin-left scale-x-0 group-hover:scale-x-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
