
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogo from '../components/NavLogo';

const RegistrationPage: React.FC = () => {
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
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
                        <a className="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contact Us</a>
                    </nav>
                    <div className="flex gap-2">
                        <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
                            <span className="truncate">Login</span>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="flex min-h-[calc(100vh-64px)] w-full flex-col lg:flex-row">
                <div className="relative hidden lg:flex w-1/2 flex-col justify-between overflow-hidden bg-slate-900 p-12 text-white">
                    <div className="absolute inset-0 z-0 h-full w-full bg-cover bg-center opacity-60" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOdxi3yc9yH_OTXvjp867kzdsj--ZxwNXiZRAEh3uHrnRfEnydBCHDB5KIzshFBemce3WTOxd0YHkVAnBp_28I5lmnyPIjDuPgpnvR8l1wNrKDr9GoOeGlP-YT2XaLqP9RfNuc-jGbA_Ha_Uk_8uwJM03JeiYmezArBGuAmwoFJ-L76JYq3N0osr4ng3gEfdZxTzb-CPVt2XxVHz_yozK_UmOoRobHbCRtuuCBupdKmLEhhll-_0ck1rrHUid91s0v7n4EBN6hq54h')"}}></div>
                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="relative z-10">
                        <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-inset ring-blue-500/30">Join the Community</span>
                    </div>
                    <div className="relative z-10 max-w-lg">
                        <blockquote className="text-3xl font-bold leading-snug tracking-tight">"The blood you donate gives someone another chance at life. One day that someone may be a close relative, a friend, a loved one—or even you."</blockquote>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4LLPlepBL0IWe9ffKrTWWN0sM8zJOrucA85xOAsn1zi-2_7u3--kiOrBj-oNvw9cZ6eIEXUZgs90gLgR0gzms8nPN61rkGyJ6Vb701bd5RbjuGbfCwwsDQ3-ezQ_pFIde6YjmIVmNERQt6mNtm--sbwRzMrY8ZcG_2uM_n1yQw4XPv1IcKRabiMgYrmX1OAIpVVUY3kTEH1-MvJ8WP5nRp4u7daInCnY8AxzhTTTRqhdfxztmeciEPe4-g0sKarjaWcNcfOL-aX-i" alt="Donor avatar"/>
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHiIwaPu7oadK2DppxjhNa6yRA3pxFHGVLtpL5R84lLbBiRKJQlNZ5iivZ3aRAEA6QcPix4BT7GqtsPTKgnsB4o6TLB6GyXbLdaLzX56ZRhKWAG9cefaHpPiSw2lAUv2EHwwm4dZkJ099oNmZbvNfbf8AHW3jjoubE0IjAdue1xS3hXvdF87uoE_plnM_LouR60eqd4X3EYE0Xknwgzzxr_2Evsv-ClsAPGbwjSgQESadgCkQibQO_y6EC61XXUvHkEZF0E7QmV1ZL" alt="Donor avatar"/>
                                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbAxmMNNgQZxKxjxJ7PmI-8lH3BfNXvaXPr0o0LVTqh7ARrKCn0_A4u1IvOHFyCl4tjrLJofWA772jmStKKhLMuVmwyrwA_aLeNUmZbQ8bqMkQudGKIpC58ymu9I2F7kIWt5wT6_Y7S0HWpVDmhW_fqrA32g5R3EW61kuDZ5t4F161lYzNszw7eWTKFm_HukhN9Fo35GlJ8x6HtVaAtTyYpYSxEX8a1U2YTpWQVI3FJ04D1eigxo00C_H0-jZ68MH17GxSGnECCUPG" alt="Donor avatar"/>
                            </div>
                            <div className="text-sm font-medium text-slate-300">Join 12,000+ donors registered this month.</div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col justify-center lg:w-1/2 bg-background-light dark:bg-background-dark px-4 py-12 sm:px-12 xl:px-24">
                    <div className="mx-auto w-full max-w-[520px]">
                        <div className="mb-8 border-b border-[#cfdbe7] dark:border-gray-700">
                            <div className="flex gap-8">
                                <Link to="/login" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4c739a] dark:text-slate-400 hover:text-[#0d141b] dark:hover:text-white pb-3 pt-4 transition-colors">
                                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Log In</p>
                                </Link>
                                <button className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-[#0d141b] dark:text-primary pb-3 pt-4">
                                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Register</p>
                                </button>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h1 className="text-[#0d141b] dark:text-white text-3xl font-black leading-tight tracking-tight">Become a Hero</h1>
                            <p className="mt-2 text-[#4c739a] dark:text-slate-400 text-base">Fill in your details to start your journey as a life-saving donor.</p>
                        </div>
                        <form className="flex flex-col gap-5" onSubmit={handleRegister}>
                            <label className="flex flex-col gap-1.5">
                                <span className="text-[#0d141b] dark:text-slate-200 text-sm font-semibold leading-normal">Full Name</span>
                                <div className="relative">
                                    <input className="peer form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base placeholder:text-[#93adc8] dark:placeholder:text-gray-500" placeholder="e.g. Sarah Jenkins" type="text" required/>
                                    <span className="material-symbols-outlined absolute right-4 top-3 text-[#93adc8] pointer-events-none text-[20px]">person</span>
                                </div>
                            </label>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-[#0d141b] dark:text-slate-200 text-sm font-semibold leading-normal">Email Address</span>
                                    <div className="relative">
                                        <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#0d141b] dark:text-white border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base placeholder:text-[#93adc8] dark:placeholder:text-gray-500" placeholder="name@example.com" type="email" required/>
                                        <span className="material-symbols-outlined absolute right-4 top-3 text-[#93adc8] pointer-events-none text-[20px]">mail</span>
                                    </div>
                                </label>
                                <label className="flex flex-col gap-1.5">
                                    <span className="text-[#0d141b] dark:text-slate-200 text-sm font-semibold leading-normal">Phone Number</span>
                                    <div className="relative">
                                        <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#0d141b] dark:text-white border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-slate-800 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 text-base placeholder:text-[#93adc8] dark:placeholder:text-gray-500" placeholder="+1 (555) 000-0000" type="tel" required/>
                                        <span className="material-symbols-outlined absolute right-4 top-3 text-[#93adc8] pointer-events-none text-[20px]">call</span>
                                    </div>
                                </label>
                            </div>
                            <button 
                                type="submit" 
                                className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary py-3 px-4 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
                            >
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;
