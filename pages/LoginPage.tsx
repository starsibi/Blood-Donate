
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogo from '../components/NavLogo';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login("sarah.j@example.com");
        navigate('/dashboard');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white font-display min-h-screen">
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-gray-800 bg-white dark:bg-[#101922] px-6 py-3 lg:px-10">
                <NavLogo />
                <div className="hidden md:flex flex-1 justify-end gap-8">
                    <nav className="flex items-center gap-9">
                        <Link className="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/">Home</Link>
                        <a className="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Eligibility</a>
                        <Link className="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" to="/search-donor">Locate Center</Link>
                    </nav>
                </div>
            </header>
            <div className="flex min-h-[calc(100vh-64px)] w-full flex-col lg:flex-row">
                <div className="relative hidden lg:flex w-1/2 flex-col justify-between overflow-hidden bg-slate-900 p-12 text-white">
                    <div className="absolute inset-0 z-0 h-full w-full bg-cover bg-center opacity-60" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOdxi3yc9yH_OTXvjp867kzdsj--ZxwNXiZRAEh3uHrnRfEnydBCHDB5KIzshFBemce3WTOxd0YHkVAnBp_28I5lmnyPIjDuPgpnvR8l1wNrKDr9GoOeGlP-YT2XaLqP9RfNuc-jGbA_Ha_Uk_8uwJM03JeiYmezArBGuAmwoFJ-L76JYq3N0osr4ng3gEfdZxTzb-CPVt2XxVHz_yozK_UmOoRobHbCRtuuCBupdKmLEhhll-_0ck1rrHUid91s0v7n4EBN6hq54h')"}}></div>
                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="relative z-10">
                        <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-inset ring-blue-500/30">Welcome Back</span>
                    </div>
                    <div className="relative z-10 max-w-lg">
                        <blockquote className="text-3xl font-bold leading-snug tracking-tight">"Every donation is a step towards saving a life. Thank you for being part of our community."</blockquote>
                    </div>
                </div>
                <div className="flex w-full flex-col justify-center lg:w-1/2 bg-background-light dark:bg-background-dark px-4 py-12 sm:px-12 xl:px-24">
                    <div className="mx-auto w-full max-w-[520px]">
                        <div className="mb-8 border-b border-[#cfdbe7] dark:border-gray-700">
                            <div className="flex gap-8">
                                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-[#0d141b] dark:text-primary pb-3 pt-4">
                                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Log In</p>
                                </button>
                                <Link to="/register" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c739a] dark:text-slate-400 hover:text-[#0d141b] dark:hover:text-white pb-3 pt-4 transition-colors">
                                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Register</p>
                                </Link>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-[#0d141b] dark:text-white text-3xl font-black leading-tight tracking-tight">Welcome Back</h1>
                            <p className="mt-2 text-[#4c739a] dark:text-slate-400 text-base">Enter your credentials to access your account.</p>
                        </div>
                        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
                            <label className="flex flex-col gap-1.5">
                                <span className="text-[#0d141b] dark:text-slate-200 text-sm font-semibold leading-normal">Email Address</span>
                                <div className="relative">
                                    <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#0d141b] dark:text-white border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base placeholder:text-[#93adc8] dark:placeholder:text-gray-500" placeholder="name@example.com" type="email" required/>
                                    <span className="material-symbols-outlined absolute right-4 top-3 text-[#93adc8] pointer-events-none text-[20px]">mail</span>
                                </div>
                            </label>
                            <label className="flex flex-col gap-1.5">
                                <span className="text-[#0d141b] dark:text-slate-200 text-sm font-semibold leading-normal">Password</span>
                                <div className="relative">
                                    <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#0d141b] dark:text-white border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base placeholder:text-[#93adc8] dark:placeholder:text-gray-500" placeholder="••••••••" type="password" required/>
                                    <span className="material-symbols-outlined absolute right-4 top-3 text-[#93adc8] pointer-events-none text-[20px]">lock</span>
                                </div>
                            </label>
                            <button 
                                type="submit" 
                                className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary py-3 px-4 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
