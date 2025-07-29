"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Taracover from "../../../image/project/tara-cover.webp";

export default function Tara() {
    const [activeSection, setActiveSection] = useState("overview");

    const tableOfContents = [
        { id: "overview", title: "Overview", href: "#overview" },
        { id: "challenge", title: "The Challenge", href: "#challenge" },
        { id: "process", title: "Design Process", href: "#process" },
        { id: "research", title: "Research & Analysis", href: "#research" },
        { id: "solution", title: "Design Solution", href: "#solution" },
        { id: "results", title: "Results & Impact", href: "#results" },
        { id: "learnings", title: "Key Learnings", href: "#learnings" },
    ];

    const projectInfo = {
        client: "PT Awan Data Indonesia",
        timeline: "Apr 2024 - Mar 2025",
        role: "UI/UX Designer",
        team: "3 Designers, 5 Developers, 2 Product Managers",
    };

    useEffect(() => {
        const observerOptions = {
            rootMargin: "-20% 0px -80% 0px",
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        tableOfContents.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="overflow-hidden relative min-h-screen bg-zinc-900">
                {/* Navigation */}
                <div className="relative z-20 px-6 pt-8 mx-auto max-w-7xl lg:px-8">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-300 rounded-full border backdrop-blur-md transition-all duration-300 bg-white/10 border-white/20 hover:bg-white/20 hover:text-white"
                    >
                        ← Kembali ke Portfolio
                    </Link>
                </div>

                {/* Hero Image Section */}
                <div className="flex relative z-10 flex-1 justify-center items-center px-6 pt-12 pb-16">
                    <div className="w-full max-w-5xl">
                        <div className="relative w-full aspect-video bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-700">
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-t via-transparent from-purple-900/30 to-blue-900/20"></div>

                            {/* Image container */}
                            <div className="relative w-full h-full">
                                <Image src={Taracover} alt="Tara Case Study Project" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" priority />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/40"></div>

                                {/* Status Badge */}
                                <div className="absolute top-6 left-6 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg backdrop-blur-sm">✓ Case Study</div>

                                {/* Action Button */}
                                <div className="flex absolute right-6 bottom-6 justify-center items-center w-12 h-12 rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer bg-white/20 border-white/30 hover:bg-white/30 group/btn">
                                    <svg className="w-5 h-5 text-white transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>

                            {/* Outer glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r rounded-3xl opacity-0 blur-lg transition-opacity duration-500 from-purple-500/20 via-blue-500/20 to-green-500/20 group-hover:opacity-100 -z-10"></div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 px-6 pb-20 mx-auto max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-6xl">
                        {/* Main Heading */}
                        <div className="mb-20 text-center">
                            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                                Stop the Churn and Burn
                                <br />
                                with Tier Discount Offers
                            </h1>
                        </div>

                        {/* Project Details Grid */}
                        <div className="grid grid-cols-1 gap-8 mx-auto max-w-6xl md:grid-cols-2">
                            {/* Role Card */}
                            <div className="group p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400/30">
                                <div className="flex items-center mb-6">
                                    <div className="flex justify-center items-center mr-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl transition-transform group-hover:scale-110">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-purple-200">Role</h3>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-200">User research, visual, and interaction design.</p>
                            </div>

                            {/* Timeline Card */}
                            <div className="group p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-blue-400/30">
                                <div className="flex items-center mb-6">
                                    <div className="flex justify-center items-center mr-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl transition-transform group-hover:scale-110">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-200">Timeline</h3>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-200">Q1 - Q4, 2022</p>
                            </div>

                            {/* Product & Platform Card */}
                            <div className="group p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-green-400/30">
                                <div className="flex items-center mb-6">
                                    <div className="flex justify-center items-center mr-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl transition-transform group-hover:scale-110">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-200">Product & Platform</h3>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-200">Grab is a super-app which provides users with transportation, food delivery, and digital payments services via a mobile app.</p>
                            </div>

                            {/* Impact Card */}
                            <div className="group p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400/30">
                                <div className="flex items-center mb-6">
                                    <div className="flex justify-center items-center mr-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transition-transform group-hover:scale-110">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-purple-200">Impact</h3>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-200">I worked on the GrabFood vertical to help user get the best value from their purchase, while minimizing the money spent on offers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content with Sidebar */}
            <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Table of Contents - 25% */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-8">
                            <h3 className="mb-4 text-lg font-semibold text-gray-900">Daftar Isi</h3>
                            <nav className="space-y-2">
                                {tableOfContents.map((item) => (
                                    <a
                                        key={item.id}
                                        href={item.href}
                                        className={`block py-2 px-3 rounded-lg text-sm transition-colors ${activeSection === item.id ? "bg-orange-100 text-orange-700 font-medium" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content - 75% */}
                    <div className="max-w-none lg:w-3/4 prose prose-lg">
                        {/* Overview Section */}
                        <section id="overview" className="mb-16">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Overview</h2>
                            <div className="p-6 mb-8 bg-gray-50 rounded-xl">
                                <p className="mb-4 text-lg leading-relaxed">
                                    Maxcloud adalah platform cloud management yang dirancang untuk membantu developer dan system administrator mengelola infrastruktur cloud mereka dengan lebih efisien. Sebagai UI/UX Designer, saya
                                    bertanggung jawab untuk merancang antarmuka yang intuitif dan powerful.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Proyek ini berfokus pada peningkatan user experience dalam mengelola virtual machines, monitoring resources, dan deployment aplikasi melalui dashboard yang komprehensif namun mudah digunakan.
                                </p>
                            </div>
                        </section>

                        {/* Challenge Section */}
                        <section id="challenge" className="mb-16">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">The Challenge</h2>
                            <div className="space-y-6">
                                <div className="pl-6 border-l-4 border-red-500">
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Problem Statement</h3>
                                    <p className="leading-relaxed text-gray-700">
                                        Platform cloud management yang ada saat ini terlalu kompleks untuk pengguna baru, namun tidak cukup powerful untuk pengguna advanced. User sering mengalami kesulitan dalam:
                                    </p>
                                    <ul className="mt-4 space-y-2 text-gray-700">
                                        <li>• Navigasi yang rumit untuk tugas-tugas sederhana</li>
                                        <li>• Kurangnya visibility terhadap status dan performa system</li>
                                        <li>• Proses deployment yang memakan waktu lama</li>
                                        <li>• Tidak ada guidance untuk pengguna baru</li>
                                    </ul>
                                </div>

                                <div className="p-6 bg-blue-50 rounded-xl">
                                    <h3 className="mb-3 text-xl font-semibold text-gray-900">Design Goals</h3>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div>
                                            <h4 className="mb-2 font-semibold text-blue-900">Usability</h4>
                                            <p className="text-sm text-blue-800">Membuat interface yang mudah dipelajari dan digunakan</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold text-blue-900">Efficiency</h4>
                                            <p className="text-sm text-blue-800">Mengurangi jumlah langkah untuk menyelesaikan tugas</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold text-blue-900">Visibility</h4>
                                            <p className="text-sm text-blue-800">Memberikan insight yang jelas tentang system status</p>
                                        </div>
                                        <div>
                                            <h4 className="mb-2 font-semibold text-blue-900">Scalability</h4>
                                            <p className="text-sm text-blue-800">Design yang dapat beradaptasi dengan kebutuhan user</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Process Section */}
                        <section id="process" className="mb-16">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Design Process</h2>
                            <div className="space-y-8">
                                <div className="relative">
                                    <div className="flex items-center mb-6 space-x-4">
                                        <div className="flex justify-center items-center w-12 h-12 bg-orange-100 rounded-full">
                                            <span className="font-semibold text-orange-600">01</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Research & Discovery</h3>
                                    </div>
                                    <div className="ml-16">
                                        <p className="mb-4 text-gray-700">Melakukan user interviews dengan 15 developer dan system administrator untuk memahami pain points dan workflow mereka saat ini.</p>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <strong>Key Activities:</strong> User interviews, Competitive analysis, Heuristic evaluation
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="flex items-center mb-6 space-x-4">
                                        <div className="flex justify-center items-center w-12 h-12 bg-orange-100 rounded-full">
                                            <span className="font-semibold text-orange-600">02</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Define & Ideate</h3>
                                    </div>
                                    <div className="ml-16">
                                        <p className="mb-4 text-gray-700">Mendefinisikan user personas, user journey maps, dan information architecture yang optimal untuk mengakomodasi berbagai level expertise.</p>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <strong>Key Activities:</strong> Persona development, Journey mapping, Card sorting, Wireframing
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="flex items-center mb-6 space-x-4">
                                        <div className="flex justify-center items-center w-12 h-12 bg-orange-100 rounded-full">
                                            <span className="font-semibold text-orange-600">03</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Design & Prototype</h3>
                                    </div>
                                    <div className="ml-16">
                                        <p className="mb-4 text-gray-700">Membuat high-fidelity prototypes dengan focus pada dashboard utama, monitoring tools, dan deployment workflow.</p>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <strong>Key Activities:</strong> UI design, Interactive prototyping, Design system creation
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="flex items-center mb-6 space-x-4">
                                        <div className="flex justify-center items-center w-12 h-12 bg-orange-100 rounded-full">
                                            <span className="font-semibold text-orange-600">04</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900">Test & Iterate</h3>
                                    </div>
                                    <div className="ml-16">
                                        <p className="mb-4 text-gray-700">Melakukan usability testing dengan 12 participants untuk validasi design decisions dan mengidentifikasi area improvement.</p>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <strong>Key Activities:</strong> Usability testing, A/B testing, Design iterations
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Research Section */}
                        <section id="research" className="mb-16">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Research & Analysis</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900">User Personas</h3>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div className="p-6 bg-white rounded-xl border">
                                            <h4 className="mb-3 text-lg font-semibold">👨‍💻 Alex - Senior Developer</h4>
                                            <div className="space-y-3">
                                                <div>
                                                    <strong className="text-sm text-gray-600">Goals:</strong>
                                                    <p className="text-sm">Deploy aplikasi dengan cepat dan monitor performa</p>
                                                </div>
                                                <div>
                                                    <strong className="text-sm text-gray-600">Pain Points:</strong>
                                                    <p className="text-sm">Interface yang lambat, kurang automation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-white rounded-xl border">
                                            <h4 className="mb-3 text-lg font-semibold">👩‍💼 Sarah - System Admin</h4>
                                            <div className="space-y-3">
                                                <div>
                                                    <strong className="text-sm text-gray-600">Goals:</strong>
                                                    <p className="text-sm">Mengelola resource dan monitor security</p>
                                                </div>
                                                <div>
                                                    <strong className="text-sm text-gray-600">Pain Points:</strong>
                                                    <p className="text-sm">Sulit tracking usage, alert system kurang</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900">Key Insights</h3>
                                    <div className="p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl">
                                        <div className="grid gap-6 md:grid-cols-3">
                                            <div>
                                                <div className="mb-2 text-2xl font-bold text-blue-600">73%</div>
                                                <p className="text-sm text-gray-700">Users membutuhkan dashboard yang lebih visual</p>
                                            </div>
                                            <div>
                                                <div className="mb-2 text-2xl font-bold text-orange-600">65%</div>
                                                <p className="text-sm text-gray-700">Menginginkan guided onboarding</p>
                                            </div>
                                            <div>
                                                <div className="mb-2 text-2xl font-bold text-green-600">80%</div>
                                                <p className="text-sm text-gray-700">Butuh real-time monitoring</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Solution Section */}
                        <section id="solution" className="mb-16">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Design Solution</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900">1. Simplified Dashboard</h3>
                                    <div className="flex justify-center items-center mb-4 h-64 bg-gray-100 rounded-xl">
                                        <span className="text-gray-500">[Dashboard Screenshot Placeholder]</span>
                                    </div>
                                    <p className="text-gray-700">
                                        Merancang dashboard dengan hierarchy yang jelas, menggunakan card-based layout untuk menampilkan informasi penting seperti resource usage, active deployments, dan system alerts.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900">2. Streamlined Deployment Flow</h3>
                                    <div className="flex justify-center items-center mb-4 h-64 bg-gray-100 rounded-xl">
                                        <span className="text-gray-500">[Deployment Flow Screenshot Placeholder]</span>
                                    </div>
                                    <p className="text-gray-700">Menyederhanakan proses deployment dari 12 langkah menjadi 4 langkah utama dengan smart defaults dan progressive disclosure untuk advanced settings.</p>
                                </div>

                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900">3. Real-time Monitoring</h3>
                                    <div className="flex justify-center items-center mb-4 h-64 bg-gray-100 rounded-xl">
                                        <span className="text-gray-500">[Monitoring Interface Placeholder]</span>
                                    </div>
                                    <p className="text-gray-700">Implementasi real-time charts dan intelligent alerts yang memberikan insight actionable tentang performa system tanpa overwhelming user dengan terlalu banyak data.</p>
                                </div>
                            </div>
                        </section>

                        {/* Results Section */}
                        <section id="results" className="mb-16">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Results & Impact</h2>
                            <div className="space-y-8">
                                <div className="p-6 bg-green-50 rounded-xl">
                                    <h3 className="mb-4 text-xl font-semibold text-green-900">Business Impact</h3>
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <div className="mb-2 text-3xl font-bold text-green-600">40%</div>
                                            <p className="text-green-800">Peningkatan efisiensi pengelolaan server</p>
                                        </div>
                                        <div>
                                            <div className="mb-2 text-3xl font-bold text-green-600">60%</div>
                                            <p className="text-green-800">Pengurangan waktu deployment</p>
                                        </div>
                                        <div>
                                            <div className="mb-2 text-3xl font-bold text-green-600">25%</div>
                                            <p className="text-green-800">Pengurangan support tickets</p>
                                        </div>
                                        <div>
                                            <div className="mb-2 text-3xl font-bold text-green-600">95%</div>
                                            <p className="text-green-800">User satisfaction rate</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-900">User Feedback</h3>
                                    <div className="space-y-4">
                                        <blockquote className="py-4 pl-6 bg-orange-50 border-l-4 border-orange-500">
                                            <p className="mb-2 italic text-gray-700">&ldquo;Dashboard baru sangat membantu saya untuk monitor semua project dalam satu tempat. Deployment jadi jauh lebih cepat dan mudah.&rdquo;</p>
                                            <cite className="text-sm text-gray-600">— Alex, Senior Developer</cite>
                                        </blockquote>
                                        <blockquote className="py-4 pl-6 bg-blue-50 border-l-4 border-blue-500">
                                            <p className="mb-2 italic text-gray-700">&ldquo;Sebagai admin, saya suka banget sama alert system yang baru. Lebih informatif dan tidak spam seperti yang dulu.&rdquo;</p>
                                            <cite className="text-sm text-gray-600">— Sarah, System Administrator</cite>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Learnings Section */}
                        <section id="learnings" className="mb-16">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Key Learnings</h2>
                            <div className="space-y-6">
                                <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500">
                                    <h3 className="mb-3 text-lg font-semibold text-yellow-900">Progressive Disclosure is Key</h3>
                                    <p className="text-yellow-800">
                                        Untuk platform complex seperti cloud management, sangat penting untuk menggunakan progressive disclosure. Menampilkan informasi essential di level pertama, dan advanced features di level yang lebih
                                        dalam.
                                    </p>
                                </div>

                                <div className="p-6 bg-blue-50 border-l-4 border-blue-500">
                                    <h3 className="mb-3 text-lg font-semibold text-blue-900">Context is Everything</h3>
                                    <p className="text-blue-800">User membutuhkan context yang tepat pada waktu yang tepat. Smart defaults dan contextual help sangat membantu user untuk membuat keputusan dengan confidence.</p>
                                </div>

                                <div className="p-6 bg-purple-50 border-l-4 border-purple-500">
                                    <h3 className="mb-3 text-lg font-semibold text-purple-900">Design System Matters</h3>
                                    <p className="text-purple-800">Membangun design system yang robust dari awal sangat membantu dalam maintaining consistency dan scaling design across different features.</p>
                                </div>
                            </div>
                        </section>

                        {/* Next Steps */}
                        <section className="mb-16">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Next Steps</h2>
                            <div className="p-6 bg-gray-50 rounded-xl">
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start">
                                        <span className="mr-3 text-orange-500">→</span>
                                        Implementasi AI-powered recommendations untuk optimization
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 text-orange-500">→</span>
                                        Pengembangan mobile app untuk monitoring on-the-go
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 text-orange-500">→</span>
                                        Enhanced collaboration features untuk team management
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 text-orange-500">→</span>
                                        Integration dengan lebih banyak cloud providers
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* CTA */}
                        <div className="p-8 text-center bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl">
                            <h3 className="mb-4 text-xl font-semibold text-gray-900">Tertarik dengan case study ini?</h3>
                            <p className="mb-6 text-gray-600">Mari diskusikan lebih lanjut tentang project ini atau bagaimana saya bisa membantu project Anda.</p>
                            <Link href="/contact" className="inline-flex items-center px-6 py-3 font-semibold text-white bg-orange-600 rounded-lg transition-colors hover:bg-orange-700">
                                Hubungi Saya
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
