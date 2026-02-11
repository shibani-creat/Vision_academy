import React from 'react';
import { Target, MapPin, Calendar, BookOpen } from 'lucide-react';
import classImg from "../assets/images/class.png";

const About = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="flex flex-col md:flex-row gap-16 items-center mb-24">

                    {/* Image */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-[3rem] transform -rotate-3 z-0"></div>
                        <img
                            src={classImg}
                            alt="Students interacting"
                            className="relative z-10 w-full rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500"
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <div>
                            <span className="text-orange-500 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-orange-500"></span> About Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 leading-tight">
                                About <span className="text-blue-600">Vision Academy</span>
                            </h2>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            <strong className="text-slate-800">Vision Academy</strong>, established in 2023, is a premier education and academic support institution dedicated to delivering accessible, structured, and outcome-oriented education across Odisha.
                        </p>

                        <p className="text-slate-600 leading-relaxed">
                            Headquartered in Bhubaneswar, we offer a <strong className="text-blue-600">hybrid learning model</strong> combining offline classroom coaching with online education, reaching students from urban, semi-urban, and rural regions.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                                <div className="bg-white p-2 rounded-lg shadow-sm text-blue-600 shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">Headquartered in Bhubaneswar</h4>
                                    <p className="text-slate-500 text-xs">Reaching students across urban, semi-urban, and rural regions.</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-start gap-3">
                                <div className="bg-white p-2 rounded-lg shadow-sm text-orange-500 shrink-0">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">Established 2023</h4>
                                    <p className="text-slate-500 text-xs">A premier institution dedicated to academic excellence.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
