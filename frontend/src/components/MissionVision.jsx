import React from "react";

function MissionVision() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-slate-100">

            {/* Heading */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-14">
                <h2 className="text-4xl font-extrabold text-slate-800">
                    Our Mission & Vision
                </h2>
                <p className="text-gray-500 mt-3">
                    Shaping students for a successful future
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                {/* Mission Card – Blue Theme */}
                <div className="group relative bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">

                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-500"></div>

                    <h3 className="text-3xl font-bold mb-4">Our Mission</h3>

                    <p className="leading-relaxed text-blue-50">
                        To deliver high-quality, affordable education that builds strong
                        academic foundations, confidence, and real-world skills for every
                        student.
                    </p>
                </div>

                {/* Vision Card – Purple Theme */}
                <div className="group relative bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden">

                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-500"></div>

                    <h3 className="text-3xl font-bold mb-4">Our Vision</h3>

                    <p className="leading-relaxed text-purple-100">
                        To become a leading educational institution known for innovation,
                        excellence, and nurturing future-ready students across the nation.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default MissionVision;
