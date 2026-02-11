import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-blue-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <span className="text-white font-bold text-xl">VA</span>
                            </div>
                            <span className="font-bold text-2xl text-white tracking-tight">Vision Academy</span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering students with quality education and expert guidance since 2023.
                        </p>
                        <p className="text-slate-500 text-xs">Made within Bhubaneswar</p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white transition">Home</a></li>
                            <li><a href="#about" className="text-slate-400 hover:text-white transition">About Us</a></li>
                            <li><a href="#courses" className="text-slate-400 hover:text-white transition">Programs</a></li>
                            <li><a href="#enquiry" className="text-slate-400 hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Courses</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white transition">Class 1-10 Tuition</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition">+2 Science & Commerce</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition">Entrance Coaching</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white transition">Summer Camps</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Connect</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-blue-600 transition text-blue-500 group-hover:text-white">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-slate-400 text-sm leading-relaxed">
                                    BN Tower, Near chancellor grand Puri Bipasha sishupalagada, Bhubaneswar
                                </span>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-blue-600 transition text-blue-500 group-hover:text-white">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-slate-400 text-sm leading-relaxed">
                                    Nuagaon, in fornt of block office, kandhamal
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© 2026 Vision Academy. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="bg-slate-800 p-2 rounded-lg text-slate-400 hover:bg-white hover:text-slate-900 transition"><Facebook size={18} /></a>
                        <a href="#" className="bg-slate-800 p-2 rounded-lg text-slate-400 hover:bg-white hover:text-slate-900 transition"><Twitter size={18} /></a>
                        <a href="#" className="bg-slate-800 p-2 rounded-lg text-slate-400 hover:bg-white hover:text-slate-900 transition"><Instagram size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
