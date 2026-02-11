import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from "../assets/images/logo.png";   // logo import

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo + Title */}
                    <div className="flex-shrink-0 flex items-center gap-3">

                        {/* Logo */}
                        <img
                            src={logo}
                            alt="Vision Academy Logo"
                            className="w-12 h-12 object-contain"
                        />

                        {/* Title */}
                        <div className="leading-tight">
                            <span className="block font-bold text-2xl text-slate-800 tracking-tight">
                                Vision Academy
                            </span>
                            <span className="text-blue-600 text-sm font-semibold">
                                The Ultimate Success
                            </span>
                        </div>

                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium transition">Home</a>
                        <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition">About</a>
                        <a href="#courses" className="text-slate-600 hover:text-blue-600 font-medium transition">Programs</a>
                        <a href="#faculty" className="text-slate-600 hover:text-blue-600 font-medium transition">Faculty</a>
                        <a href="#team" className="text-slate-600 hover:text-blue-600 font-medium transition">Team</a>
                        <a href="#enquiry" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                            <Phone size={18} /> Enquire Now
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-blue-600 transition">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
                    <div className="px-4 pt-4 pb-8 space-y-4 shadow-xl">
                        <a href="#" className="block text-slate-600 hover:text-blue-600 font-medium text-lg">Home</a>
                        <a href="#courses" className="block text-slate-600 hover:text-blue-600 font-medium text-lg">Programs</a>
                        <a href="#about" className="block text-slate-600 hover:text-blue-600 font-medium text-lg">About</a>
                        <a href="#enquiry" className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl font-bold">Enquire Now</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
