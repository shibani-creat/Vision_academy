import React from 'react';
import { BadgeCheck } from 'lucide-react';

const Faculty = () => {

    const facultyMembers = [
        {
            name: "Rtn Dr. Prasanna Choudhury",
            role: "Mathematics Expert",
            img: "/images/pc-sir.png",
            qual: "Ph.D. in Mathematics",
            desc: "Director of BENCHMARK CLASSES & PASE ACADEMY. Present President of Rotary Club of Bhubaneswar Capital. He is also famed as President of OCTAA, Life member of Odisha Mathematics Society."
        },
        {
            name: "Ms. Sonalika Das",
            role: "English Expert",
            img: "/images/sonalika-das.png",
            qual: "PG in English",
            desc: "Professionally, a postgraduate in English can work in diverse fields such as teaching, academia, content writing, editing and publishing, journalism, public relations, corporate communication, translation, and creative writing."
        }
    ];

    return (
        <section id="faculty" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Our Team</span>
                    <h2 className="text-4xl font-bold text-slate-800 mt-2">
                        Meet Our <span className="text-blue-600">Expert Faculty</span>
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                        Learners today, Leaders tomorrow. Guided by the best minds in education.
                    </p>
                </div>

                {/* CENTERED GRID */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {facultyMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                                <div className="relative h-64 overflow-hidden bg-slate-200">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                                    <p className="text-blue-600 font-bold text-sm mb-2">{member.role}</p>

                                    <p className="text-slate-400 text-xs font-bold uppercase tracking-wide mb-3 flex items-center gap-1">
                                        <BadgeCheck size={14} className="text-orange-500" /> {member.qual}
                                    </p>

                                    <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-3">
                                        {member.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Faculty;
