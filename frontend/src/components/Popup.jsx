import React from 'react';
import { X, Calendar, Clock, MapPin } from 'lucide-react';

const Popup = ({ isOpen, onClose, course }) => {
    if (!isOpen || !course) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-scale-up">
                <button onClick={onClose} className="absolute right-6 top-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition">
                    <X size={24} />
                </button>

                <div className={`h-40 ${course.color || 'bg-blue-600'} relative flex items-center px-8`}>
                    <h2 className="text-3xl font-bold text-white">{course.title}</h2>
                </div>

                <div className="p-8 space-y-6">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {course.details || course.desc}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl text-blue-800">
                            <Calendar className="flex-shrink-0" />
                            <div>
                                <span className="block text-xs font-bold uppercase opacity-70">Duration</span>
                                <span className="font-semibold">2 Months</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl text-orange-800">
                            <Clock className="flex-shrink-0" />
                            <div>
                                <span className="block text-xs font-bold uppercase opacity-70">Timing</span>
                                <span className="font-semibold">Flexible Batches</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl text-purple-800 md:col-span-2">
                            <MapPin className="flex-shrink-0" />
                            <div>
                                <span className="block text-xs font-bold uppercase opacity-70">Mode</span>
                                <span className="font-semibold">{course.title.includes('Online') ? 'Online Live Classes' : 'Offline at Bhubaneswar and Kandhamal Campus'}</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                        <h3 className="font-bold text-slate-800 mb-3">Key Highlights</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-slate-600">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Comprehensive Study Material
                            </li>
                            <li className="flex items-center gap-2 text-slate-600">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Regular Practice Tests
                            </li>
                            <li className="flex items-center gap-2 text-slate-600">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Doubt Clearing Sessions
                            </li>
                        </ul>
                    </div>

                    <div className="pt-4 flex gap-4">
                        <button onClick={onClose} className="flex-1 py-4 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition border border-slate-200">
                            Close
                        </button>
                        <a href="#enquiry" onClick={onClose} className="flex-1 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition text-center shadow-lg hover:shadow-blue-500/30">
                            Enroll Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
