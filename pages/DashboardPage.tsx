
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../components/NavLogo';
import { useAuth } from '../context/AuthContext';
import { getEligibilityAdvice } from '../services/geminiService';

const DashboardPage: React.FC = () => {
    const { user } = useAuth();
    const [advice, setAdvice] = useState<any>(null);
    const [loadingAdvice, setLoadingAdvice] = useState(false);

    useEffect(() => {
        const fetchAdvice = async () => {
            setLoadingAdvice(true);
            const res = await getEligibilityAdvice("Good", "2023-10-12");
            setAdvice(res);
            setLoadingAdvice(false);
        };
        fetchAdvice();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-10 py-3 sticky top-0 z-50">
                <NavLogo />
                <div className="hidden md:flex flex-1 justify-center gap-8">
                    <Link className="text-primary font-bold text-sm leading-normal" to="/dashboard">Dashboard</Link>
                    <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" to="/donation-history">History</Link>
                    <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" to="/search-donor">Centers</Link>
                    <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" to="/profile">Profile</Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-slate-100 dark:ring-slate-800 cursor-pointer" style={{backgroundImage: `url("${user.avatarUrl}")`}}></div>
                </div>
            </header>
            <div className="layout-container flex h-full grow flex-col max-w-7xl mx-auto w-full px-4 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Welcome back, {user.name.split(' ')[0]}</h1>
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold uppercase tracking-wider border border-red-200 dark:border-red-800">{user.bloodType}</span>
                            <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Donor ID: {user.id}</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Link to="/profile" className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined mr-2 text-[20px]">edit</span>
                            <span className="truncate">Edit Profile</span>
                        </Link>
                        <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">
                            <span className="material-symbols-outlined mr-2 text-[20px]">calendar_add_on</span>
                            <span className="truncate">Book Appointment</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
                            <div className="w-full md:w-1/3 bg-center bg-no-repeat bg-cover min-h-[200px] md:min-h-full relative" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGODK8h8l0JcW5Q_tVUoQmeeSKsp6p8w7VbKGVxhEp2o65SHts-1GZCh0IH81mEpH0eJxZ8RK0O49VraaY7Z6Eyau2LWiZVxMDanEU0Kr9RSpBqWj-yI3ByCgaVun-lqQRohrxdFiWo8pm5bsnRsysWxYoShxTO7V38HZeWq5G1slskupeHuysBZRUx_2am1Wzk1DhviKYV2lCpdFP8SU1y2coORLTeD1EPCXwG3b23xB2jCP3PqOy3cDf7hvgOwjPtzjyo56NaNyc")'}}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
                            </div>
                            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`material-symbols-outlined ${advice?.isEligible ? 'text-green-500' : 'text-yellow-500'}`}>
                                        {advice?.isEligible ? 'check_circle' : 'info'}
                                    </span>
                                    <p className="text-slate-900 dark:text-white text-lg font-bold">Eligibility Status (AI Guided)</p>
                                </div>
                                {loadingAdvice ? (
                                    <p className="text-slate-400 italic">Analyzing health records...</p>
                                ) : (
                                    <>
                                        <p className="text-slate-600 dark:text-slate-300 text-base mb-6">
                                            {advice?.reason || 'Loading eligibility info...'}
                                        </p>
                                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border border-blue-100 dark:border-blue-800 mb-6">
                                            <p className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase mb-1">AI Recommendation</p>
                                            <p className="text-sm text-slate-700 dark:text-slate-300">{advice?.advice}</p>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-slate-500 dark:text-slate-400 font-medium">Recovery Progress</span>
                                                <span className="text-primary font-bold">80%</span>
                                            </div>
                                            <div className="h-3 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                                                <div className="h-full rounded-full bg-primary" style={{width: '80%'}}></div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        {/* Recent Activity */}
                        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-700">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold">Recent Donations</h3>
                                <Link to="/donation-history" className="text-primary text-sm font-bold hover:underline">View All History</Link>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-700">
                                            <th className="px-6 py-4 font-medium">Date</th>
                                            <th className="px-6 py-4 font-medium">Location</th>
                                            <th className="px-6 py-4 font-medium">Donation Type</th>
                                            <th className="px-6 py-4 font-medium text-right">Unit ID</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border-b border-slate-50 dark:border-slate-700/50">
                                            <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">Oct 12, 2023</td>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-300">City Hospital Center</td>
                                            <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Whole Blood</span></td>
                                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-right font-mono">#WB-2938</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors border-b border-slate-50 dark:border-slate-700/50">
                                            <td className="px-6 py-4 text-slate-900 dark:text-white font-medium">Jun 15, 2023</td>
                                            <td className="px-6 py-4 text-slate-600 dark:text-slate-300">Mobile Unit 04</td>
                                            <td className="px-6 py-4"><span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Whole Blood</span></td>
                                            <td className="px-6 py-4 text-slate-500 dark:text-slate-400 text-right font-mono">#WB-1029</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg p-6 flex flex-col gap-6">
                            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                            <div className="relative flex justify-between items-start">
                                <div className="flex flex-col">
                                    <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-1">BloodLink Donor Card</p>
                                    <p className="text-2xl font-bold tracking-tight">{user.name}</p>
                                </div>
                                <span className="material-symbols-outlined text-4xl opacity-80">bloodtype</span>
                            </div>
                            <div className="relative flex gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                                <div className="bg-white p-2 rounded-md shrink-0">
                                    <img alt="QR Code" className="size-20 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD0NT4_kUNsIGVXcmR6686zc28HcDgWZGgKPBt9gg3IGX9NXHHlKG6k3QfylNah_babfJsSZhwZ99lO1bNPoGZDNX_hnQDKTKH8URY8k7Ex_KAQjad4PFyNw4ojwVEW8UBY5EJnGoMxYIuvZDwD7_-xVlbah-p2xSn-N_wESY287dHm7iFEcgsFmUd1JN_2duFdRcD37_sr81zUME6gZJPwzZi4XQOZVv8yWKbpJyGdE4-FNi8vH8DbkqRgnX7eTJvNW4fLQUx82o6"/>
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                    <p className="text-xs text-blue-100 uppercase">Blood Type</p>
                                    <p className="text-xl font-black mb-1">{user.bloodType}</p>
                                    <p className="text-xs text-blue-100 uppercase">Donor Since</p>
                                    <p className="text-sm font-medium">{user.donorSince}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                                <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider">Quick Actions</h3>
                            </div>
                            <Link className="flex items-center gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-0 group" to="/profile">
                                <div className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-lg">medical_information</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Update Profile</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Keep your info current</span>
                                </div>
                                <span className="material-symbols-outlined ml-auto text-slate-400 text-lg">chevron_right</span>
                            </Link>
                            <Link className="flex items-center gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border-b border-slate-100 dark:border-slate-700 last:border-0 group" to="/search-donor">
                                <div className="size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-lg">location_on</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Find a Blood Drive</span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">Search near 94103</span>
                                </div>
                                <span className="material-symbols-outlined ml-auto text-slate-400 text-lg">chevron_right</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
