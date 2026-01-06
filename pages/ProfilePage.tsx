
import React from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../components/NavLogo';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
    const { user } = useAuth();
    if (!user) return null;

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden">
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 lg:px-10 py-3">
                <div className="flex items-center justify-between max-w-[1400px] mx-auto">
                    <NavLogo />
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex items-center gap-6">
                            <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" to="/dashboard">Dashboard</Link>
                            <Link className="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium" to="/search-donor">Locations</Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-white dark:ring-slate-700 shadow-sm" style={{backgroundImage: `url("${user.avatarUrl}")`}}></div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-8 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">My Donor Profile</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base">Manage your personal information, contact details, and communication preferences.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-2 text-sm font-bold text-white bg-primary rounded-lg shadow-md shadow-primary/20 hover:bg-blue-600 transition-colors flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">save</span>
                            Save Profile
                        </button>
                    </div>
                </div>
                <section className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 mb-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <div className="bg-center bg-no-repeat bg-cover rounded-full size-24 md:size-28 shadow-md" style={{backgroundImage: `url("${user.avatarUrl}")`}}></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{user.name}</h2>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[18px]">badge</span>
                                        Donor ID: {user.id}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/50 min-w-[120px]">
                            <span className="text-sm font-semibold text-red-600 dark:text-red-400 uppercase tracking-wider mb-1">Blood Type</span>
                            <span className="text-4xl font-black text-red-600 dark:text-red-400">{user.bloodType}</span>
                        </div>
                    </div>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Personal Information</h3>
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</span>
                                    <input className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm h-12 px-4" type="text" defaultValue={user.name}/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</span>
                                    <input className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm h-12 px-4" type="email" defaultValue={user.email}/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</span>
                                    <input className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm h-12 px-4" type="tel" defaultValue={user.phone}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Medical Snapshot</h3>
                            </div>
                            <div className="p-6">
                                <div className="bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 mb-6 flex gap-3 items-start">
                                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">info</span>
                                    <p className="text-sm text-slate-600 dark:text-slate-300">These details are managed by clinic staff during your donation visits.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">Weight</span>
                                        <span className="text-slate-900 dark:text-white font-semibold">68 kg</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">Last Donation</span>
                                        <span className="text-slate-900 dark:text-white font-semibold">Oct 12, 2023</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
