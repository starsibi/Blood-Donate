
import React from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../components/NavLogo';

const HomePage: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-b-[#e7edf3] dark:border-b-gray-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur px-10 py-3">
                <NavLogo />
                <div className="hidden md:flex flex-1 justify-end gap-8">
                    <div className="flex items-center gap-9">
                        <a className="text-[#0d141b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#about">About</a>
                        <Link className="text-[#0d141b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/search-donor">Find a Center</Link>
                        <a className="text-[#0d141b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#contact">Contact</a>
                    </div>
                    <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
                        <span className="truncate">Login / Register</span>
                    </Link>
                </div>
                <div className="md:hidden">
                    <span className="material-symbols-outlined cursor-pointer">menu</span>
                </div>
            </header>
            <div className="flex-1">
                {/* Hero Section */}
                <div className="@container">
                    <div className="flex flex-col gap-6 px-4 py-12 lg:px-40 lg:py-20 @[864px]:flex-row items-center">
                        <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 flex-1">
                            <div className="flex flex-col gap-4 text-left">
                                <h1 className="text-[#0d141b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl">
                                    Connect. Donate. <br/> <span className="text-primary">Save Lives.</span>
                                </h1>
                                <h2 className="text-[#4c739a] dark:text-gray-300 text-lg font-normal leading-normal max-w-xl">
                                    Your blood drop counts. Join our community to manage your donation history, find nearby drives, and help us save lives efficiently.
                                </h2>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Link to="/register" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all hover:scale-105">
                                    <span className="truncate">Register as Donor</span>
                                </Link>
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-gray-800 border border-[#e7edf3] dark:border-gray-700 text-[#0d141b] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <span className="truncate">Learn More</span>
                                </button>
                            </div>
                        </div>
                        <div className="w-full @[864px]:w-1/2 mt-8 @[864px]:mt-0">
                            <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-2xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVJRI8Yk6SwgcBCjXtPLY3qLPNT0znGuhw6jlDy8IxhaQJazzhpJJidVeK1IQTF28q6dc_qpaDJOumGzCKO7Kg7Yw5rA4O4pBfwDEy4VyPCMRzGQPGxPqMVDiY2qIGur4d4COZ2KDuHtqQFPnC9TEhAo8ATbXqxYrHde1wJ4quFOOKjK-ScAR2zjRbdVdfMeGbEeV9Tr0X1o3eb-7Pf8Mnxjaw6d7wwIeZDkaA2aCtGdbiLMKU6D5IXsTxYcfshyCrthKcC2-mpVvH")'}}></div>
                        </div>
                    </div>
                </div>
                {/* Stats Section */}
                <div className="bg-white dark:bg-gray-900 border-y border-[#e7edf3] dark:border-gray-800">
                    <div className="px-4 py-12 lg:px-40 max-w-[1440px] mx-auto">
                        <div className="flex flex-wrap gap-6 justify-center">
                            <div className="flex min-w-[200px] flex-1 flex-col items-center justify-center gap-2 rounded-xl p-8 bg-background-light dark:bg-background-dark border border-[#e7edf3] dark:border-gray-700 hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-primary text-4xl mb-2">favorite</span>
                                <p className="text-[#0d141b] dark:text-white tracking-tight text-4xl font-black leading-tight">12,500+</p>
                                <p className="text-[#4c739a] dark:text-gray-400 text-sm font-bold uppercase tracking-wide">Lives Saved</p>
                            </div>
                            <div className="flex min-w-[200px] flex-1 flex-col items-center justify-center gap-2 rounded-xl p-8 bg-background-light dark:bg-background-dark border border-[#e7edf3] dark:border-gray-700 hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-primary text-4xl mb-2">groups</span>
                                <p className="text-[#0d141b] dark:text-white tracking-tight text-4xl font-black leading-tight">45,000</p>
                                <p className="text-[#4c739a] dark:text-gray-400 text-sm font-bold uppercase tracking-wide">Registered Donors</p>
                            </div>
                            <div className="flex min-w-[200px] flex-1 flex-col items-center justify-center gap-2 rounded-xl p-8 bg-background-light dark:bg-background-dark border border-[#e7edf3] dark:border-gray-700 hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-primary text-4xl mb-2">location_on</span>
                                <p className="text-[#0d141b] dark:text-white tracking-tight text-4xl font-black leading-tight">120</p>
                                <p className="text-[#4c739a] dark:text-gray-400 text-sm font-bold uppercase tracking-wide">Active Drives</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* How It Works Section */}
                <div className="px-4 py-16 lg:px-40 max-w-[1440px] mx-auto">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4 items-center text-center">
                            <div className="inline-flex items-center rounded-full border border-[#e7edf3] dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-1 text-xs font-bold text-primary shadow-sm">
                                SIMPLE PROCESS
                            </div>
                            <h2 className="text-[#0d141b] dark:text-white tracking-tight text-3xl font-black leading-tight md:text-5xl max-w-[720px]">
                                How It Works
                            </h2>
                            <p className="text-[#4c739a] dark:text-gray-400 text-lg font-normal leading-normal max-w-[600px]">
                                Join our community and start saving lives in four simple steps. We've made the process seamless and rewarding.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {icon: "person_add", title: "1. Register", desc: "Create your secure donor profile in less than 2 minutes."},
                                {icon: "map", title: "2. Find Center", desc: "Locate the nearest donation drive or hospital on our map."},
                                {icon: "volunteer_activism", title: "3. Donate", desc: "Give the gift of life. Your comfort and safety are priority."},
                                {icon: "history_edu", title: "4. Track History", desc: "Monitor your donation milestones and health stats."}
                            ].map((item, i) => (
                                <div key={i} className="group flex flex-col gap-4 rounded-2xl border border-[#e7edf3] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#0d141b] dark:text-white text-xl font-bold leading-tight">{item.title}</h3>
                                        <p className="text-[#4c739a] dark:text-gray-400 text-sm font-normal leading-normal">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Footer Call to Action */}
                <div className="px-4 py-20 lg:px-40 flex justify-center bg-background-light dark:bg-background-dark">
                    <div className="flex flex-col items-center gap-6 text-center max-w-[600px]">
                        <h2 className="text-[#0d141b] dark:text-white text-3xl font-black leading-tight">Ready to make a difference?</h2>
                        <p className="text-[#4c739a] dark:text-gray-400 text-base">Join thousands of others who are making the world a better place, one drop at a time.</p>
                        <Link to="/register" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-slate-50 text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:scale-105 transition-all">
                            <span className="truncate">Get Started Today</span>
                        </Link>
                    </div>
                </div>
                {/* Footer */}
                <footer className="bg-white dark:bg-gray-900 border-t border-[#e7edf3] dark:border-gray-800 py-12 px-4 lg:px-40">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="flex flex-col gap-2">
                            <NavLogo />
                            <p className="text-sm text-[#4c739a] dark:text-gray-400">© 2024 BloodLink. All rights reserved.</p>
                        </div>
                        <div className="flex gap-6">
                            <a className="text-sm font-medium text-[#4c739a] hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
                            <a className="text-sm font-medium text-[#4c739a] hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Terms of Service</a>
                            <a className="text-sm font-medium text-[#4c739a] hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="#">Support</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default HomePage;
