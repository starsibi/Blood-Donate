
import React from 'react';
import { Link } from 'react-router-dom';

const NavLogo: React.FC = () => (
    <Link to="/" className="flex items-center gap-4 text-[#0d141b] dark:text-white group">
        <div className="size-8 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">bloodtype</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">BloodLink</h2>
    </Link>
);

export default NavLogo;
