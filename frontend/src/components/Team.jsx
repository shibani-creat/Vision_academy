import React from 'react';

const Team = () => {
    const teamMembers = [
        {
            name: "Ms. Kajal Rath",
            role: "Chief Executive Officer (CEO)",
            desc: "Under her leadership, Vision Academy focuses on building strong academic foundations, improving student performance, and delivering meaningful learning experiences that prepare students for long-term success",
            img: "/images/ceo.png"
        },
        {
            name: "Ms. Madhu Lata Acharya",
            role: "Chief Operating Officer (COO)",
            desc: "She oversees day-to-day operations, academic scheduling, faculty coordination, student support systems, and residential program management.",
            img: "/images/coo.jpg"
        },
        {
            name: "Prof. Urmila Swain",
            role: "Chief Education & Research Officer (CERO)",
            desc: "She leads the design and implementation of structured academic programs, promotes research-based learning practices, and mentors both students and faculty toward continuous improvement.",
            img: "/images/urmila.jpeg"
        }
    ];

    return (
        <section id="team" className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Leadership</span>
                    <h2 className="text-4xl font-bold text-slate-800 mt-2">Our Management <span className="text-orange-500">Team</span></h2>
                    <p className="text-slate-500 mt-4 text-lg">The visionaries behind Vision Academy.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center group p-8 rounded-[2.5rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300">
                            <div className="relative mb-6 inline-block">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-40 h-40 rounded-full object-cover object-top shadow-lg group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 mb-1">{member.name}</h3>
                            <p className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-4">{member.role}</p>
                            <p className="text-slate-500 leading-relaxed">
                                {member.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
