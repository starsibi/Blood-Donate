
import React from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../components/NavLogo';
import { useAuth } from '../context/AuthContext';

const HistoryPage: React.FC = () => {
    const { user } = useAuth();
    if (!user) return null;

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col transition-colors duration-200">
            <header className="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-3 shadow-sm">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <NavLogo />
                        <nav className="hidden md:flex items-center gap-6">
                            <Link className="text-text-main-light dark:text-text-main-dark text-sm font-medium hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
                            <span className="text-primary text-sm font-medium cursor-default">History</span>
                            <Link className="text-text-main-light dark:text-text-main-dark text-sm font-medium hover:text-primary transition-colors" to="/profile">Profile</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-surface-dark shadow-sm" style={{backgroundImage: `url("${user.avatarUrl}")`}}></div>
                    </div>
                </div>
            </header>
            <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 font-display">
                <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-text-sub-light dark:text-text-sub-dark">
                    <Link className="hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-text-main-light dark:text-text-main-dark font-medium">History</span>
                </nav>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="flex-1">
                        <h1 className="text-3xl sm:text-4xl font-black text-text-main-light dark:text-text-main-dark tracking-tight mb-2">Donation History</h1>
                        <p className="text-text-sub-light dark:text-text-sub-dark text-lg">Detailed records for <span className="font-semibold text-text-main-light dark:text-text-main-dark">{user.name}</span> (ID: {user.id})</p>
                    </div>
                </div>
                <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-background-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
                                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-sub-light dark:text-text-sub-dark whitespace-nowrap">Date</th>
                                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-sub-light dark:text-text-sub-dark">Location / Center</th>
                                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-sub-light dark:text-text-sub-dark">Type</th>
                                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-text-sub-light dark:text-text-sub-dark">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                <tr className="group hover:bg-background-light/50 dark:hover:bg-background-dark/50 transition-colors">
                                    <td className="py-4 px-6 text-sm font-medium text-text-main-light dark:text-text-main-dark whitespace-nowrap">Oct 24, 2023</td>
                                    <td className="py-4 px-6 text-sm text-text-main-light dark:text-text-main-dark">Central City Hospital</td>
                                    <td className="py-4 px-6 text-sm text-text-main-light dark:text-text-main-dark">Whole Blood</td>
                                    <td className="py-4 px-6"><span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-500/30">Completed</span></td>
                                </tr>
                                <tr className="group hover:bg-background-light/50 dark:hover:bg-background-dark/50 transition-colors">
                                    <td className="py-4 px-6 text-sm font-medium text-text-main-light dark:text-text-main-dark whitespace-nowrap">Jun 10, 2023</td>
                                    <td className="py-4 px-6 text-sm text-text-main-light dark:text-text-main-dark">Mobile Unit #4</td>
                                    <td className="py-4 px-6 text-sm text-text-main-light dark:text-text-main-dark">Platelets</td>
                                    <td className="py-4 px-6"><span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-500/30">Deferred</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HistoryPage;
