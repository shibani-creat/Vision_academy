import React, { useState } from 'react';
import { BookOpen, Users, Sun } from 'lucide-react';
import Popup from './Popup';

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const courses = [
        {
            icon: <Sun size={40} />,
            title: "Summer Courses",
            sub: "Boost your skills this summer",
            desc: "Our Summer Course is designed to help students utilize their vacation productively. We focus on strengthening core concepts and introducing next-level topics.",
            details: "Duration: 60 Days (March - May) | Eligibility: Class 5 to 12",
            color: "bg-orange-500",
            badges: [" 60 Days (March - May)", "Class 5 to 12"]
        },
        {
            icon: <Users size={40} />,
            title: "Offline Classes",
            sub: "Traditional learning excellence",
            desc: "Our flagship classroom program offers personal attention, disciplined environment, and peer learning opportunities at our Bhubaneswar campus.",
            details: "Full Academic Year Program for Class 1 to 12. Features small batch sizes, printed study materials, and rigorous testing.",
            color: "bg-blue-500",
            badges: ["Full Academic Year", "Class 1 to 12"]
        },
        {
            icon: <BookOpen size={40} />,
            title: "Online Classes",
            sub: "Learn from anywhere, anytime",
            desc: "Experience the classroom environment from the comfort of your home. Our live interactive sessions ensure no student is left behind.",
            details: "Full Academic Year Program for Class 1 to 12 & Droppers. Includes live classes and digital test series.",
            color: "bg-purple-500",
            badges: ["Full Academic Year", "Class 1 to 12 & Droppers"]
        }
    ];

    return (
        <section id="courses" className="py-24 bg-white relative">
            <Popup isOpen={!!selectedCourse} onClose={() => setSelectedCourse(null)} course={selectedCourse} />

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Our Courses</span>
                    <h2 className="text-4xl font-bold text-slate-800 mt-2">Transforming <span className="text-blue-600">Education</span></h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Choose the mode of learning that suits you best. We offer flexible programs for every student.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                            <div className={`${course.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                {course.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-1">{course.title}</h3>
                            <p className="text-blue-600 font-medium text-sm mb-4">{course.sub}</p>
                            <p className="text-slate-500 leading-relaxed mb-6 flex-grow text-sm">{course.desc}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {course.badges.map((badge, i) => (
                                    <span key={i} className="bg-white border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">{badge}</span>
                                ))}
                            </div>

                            <button onClick={() => setSelectedCourse(course)} className="w-full py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:border-blue-600 hover:text-blue-600 transition-colors">
                                View Full Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
