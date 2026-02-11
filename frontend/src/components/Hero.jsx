import React from 'react';
import heroImg from "../assets/images/hero.jpg";   // add image

const Hero = () => {
    return (
        <section
            className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}   // changed background
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-blue-900/70"></div>

            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                            Transform Your <span className="text-orange-500">Learning Journey</span>
                        </h1>
                        <p className="text-blue-100 text-xl leading-relaxed max-w-xl">
                            Join Vision Academy for excellence in education. Expert faculty, comprehensive courses, and a path to success for students from Class 1 to 12.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#enquiry" className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition shadow-xl hover:shadow-orange-500/20 transform hover:-translate-y-1">
                                Enroll Now
                            </a>
                            <a href="#courses" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition border border-white/20">
                                Explore Courses
                            </a>
                        </div>
                        <div className="flex items-center gap-8 pt-4 text-blue-200 text-sm font-semibold">
                            <div className="animate-bounce text-center w-full">
                                <span className="block opacity-70 mb-1">Scroll Down</span>
                                ▼
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden md:block">
                        <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-blue-600/20 p-6 rounded-2xl text-center">
                                    <span className="block text-4xl font-bold text-white mb-2">500+</span>
                                    <span className="text-blue-200 text-sm">Students Enrolled</span>
                                </div>
                                <div className="bg-orange-500/20 p-6 rounded-2xl text-center">
                                    <span className="block text-4xl font-bold text-white mb-2">50+</span>
                                    <span className="text-blue-200 text-sm">Expert Courses</span>
                                </div>
                                <div className="bg-purple-600/20 p-6 rounded-2xl text-center md:col-span-2 w-1/2 mx-auto">
                                    <span className="block text-4xl font-bold text-white mb-2">98%</span>
                                    <span className="text-blue-200 text-sm">Success Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
