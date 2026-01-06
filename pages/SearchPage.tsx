
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../components/NavLogo';
import { searchCenters } from '../services/geminiService';
import { Center } from '../types';

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Center[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await searchCenters(query);
        setResults(res);
        setLoading(false);
    };

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark px-6 py-3 sticky top-0 z-50">
                <NavLogo />
                <div className="flex items-center gap-4">
                    <Link to="/dashboard" className="text-sm font-medium hover:text-primary">Back to Dashboard</Link>
                </div>
            </header>
            <main className="flex-1 overflow-y-auto">
                <div className="layout-container flex flex-col items-center py-8 px-4 md:px-10 lg:px-20">
                    <div className="w-full max-w-7xl space-y-8">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">Find a Donor / Center</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">Search for centers or check donor status securely.</p>
                        </div>
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5">
                            <form className="flex flex-col lg:flex-row gap-4 items-end" onSubmit={handleSearch}>
                                <div className="w-full lg:flex-[2]">
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Search Query</label>
                                    <div className="relative">
                                        <input 
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            className="w-full h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary pl-11 pr-4 transition-all" 
                                            placeholder="Search by Name, City, or Zip (AI powered)" 
                                            type="text"
                                        />
                                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                            <span className="material-symbols-outlined text-[22px]">search</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full lg:w-auto mt-2 lg:mt-0">
                                    <button 
                                        disabled={loading}
                                        className="h-12 px-6 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 flex-1 lg:flex-none shadow-sm shadow-blue-500/30 disabled:opacity-50" 
                                        type="submit"
                                    >
                                        {loading ? 'Searching...' : 'Search'}
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                            {results.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                <th className="px-6 py-4 font-semibold">Center Name</th>
                                                <th className="px-6 py-4 font-semibold">Location</th>
                                                <th className="px-6 py-4 font-semibold">Status</th>
                                                <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                                            {results.map((center, i) => (
                                                <tr key={i} className="group hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors">
                                                    <td className="px-6 py-4 text-slate-700 dark:text-slate-300 font-semibold">{center.name}</td>
                                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{center.city}, {center.state}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={center.status.includes('Open') ? 'text-green-600 font-medium' : 'text-slate-500 font-medium'}>
                                                            {center.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-primary hover:underline font-medium">Book</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : !loading && query && (
                                <div className="p-10 text-center text-slate-500">
                                    No results found for "{query}". Try searching by city name.
                                </div>
                            )}
                            {!query && !loading && (
                                <div className="p-10 text-center text-slate-400 italic">
                                    Enter a location above to find donation centers.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SearchPage;
