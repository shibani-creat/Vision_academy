import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        parentName: '',
        mobile: '',
        altMobile: '',
        schoolType: '',
        currentClass: '',
        prevGrade: 'A',
        course: 'Online',
        city: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setFormData({
                    studentName: '', parentName: '', mobile: '', altMobile: '',
                    schoolType: '', currentClass: '', prevGrade: 'A', course: 'Online', city: ''
                });
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to connect to server. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="enquiry" className="py-24 bg-blue-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-16 relative overflow-hidden">
                    {/* Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 mix-blend-multiply opacity-50"></div>

                    {submitted ? (
                        <div className="text-center py-20 animate-fade-in relative z-10">
                            <CheckCircle className="mx-auto text-green-500 mb-6 drop-shadow-md" size={80} />
                            <h2 className="text-4xl font-bold text-slate-800 mb-4">Enquiry Submitted!</h2>
                            <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">Thank you for contacting Vision Academy. Our team will get back to you shortly.</p>
                            <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:text-blue-800 underline transition underline-offset-4">
                                Submit another enquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="text-center mb-10">
                                <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Admissions Open</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Get In Touch</h2>
                                <p className="text-slate-500 mt-2">Fill out the form below to start your journey.</p>
                            </div>

                            {error && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-2">
                                    <AlertCircle size={20} /> {error}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Student Name *</label>
                                    <input name="studentName" required value={formData.studentName} onChange={handleChange} type="text" className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="Enter student name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Parent Name *</label>
                                    <input name="parentName" required value={formData.parentName} onChange={handleChange} type="text" className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="Enter parent name" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number *</label>
                                    <input name="mobile" required value={formData.mobile} onChange={handleChange} type="tel" className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="10-digit mobile number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Alternate Mobile</label>
                                    <input name="altMobile" value={formData.altMobile} onChange={handleChange} type="tel" className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="Optional" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">School Type *</label>
                                    <div className="relative">
                                        <select name="schoolType" required value={formData.schoolType} onChange={handleChange} className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none appearance-none transition-all cursor-pointer">
                                            <option value="">Select Option</option>
                                            <option value="OAV">OAV (Odisha Adarsha Vidyalaya)</option>
                                            <option value="Navadaya">Jawahar Navodaya Vidyalaya</option>
                                            <option value="Private">Private / Others</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Current Class *</label>
                                    <select name="currentClass" required value={formData.currentClass} onChange={handleChange} className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all cursor-pointer" >
                                        <option value="">Select Option</option>
                                        <option value="Class 1">Class 1</option>
                                        <option value="Class 2">Class 2</option>
                                        <option value="Class 3">Class 3</option>
                                        <option value="Class 4">Class 4</option>
                                        <option value="Class 5">Class 5</option>
                                        <option value="Class 6">Class 6</option>
                                        <option value="Class 7">Class 7</option>
                                        <option value="Class 8">Class 8</option>
                                        <option value="Class 9">Class 9</option>
                                        <option value="Class 10">Class 10</option>
                                        <option value="Class 11">Class 11</option>
                                        <option value="Class 12">Class 12</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Previous Grade</label>
                                    <div className="relative">
                                        <select name="prevGrade" value={formData.prevGrade} onChange={handleChange} className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none appearance-none transition-all cursor-pointer">
                                            <option value="">Select Option</option>
                                            <option value="A"> 80-100% </option>
                                            <option value="B"> 40-80% </option>
                                            <option value="C"> 0-40% </option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">▼</div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-orange-600 mb-2">Course Interested In *</label>
                                    <div className="relative">
                                        <select name="course" required value={formData.course} onChange={handleChange} className="w-full p-4 bg-orange-50 text-orange-900 font-semibold rounded-2xl border border-orange-100 focus:bg-white focus:border-orange-200 focus:ring-4 focus:ring-orange-100 outline-none appearance-none transition-all cursor-pointer">
                                            <option value="Online">Online Academic</option>
                                            <option value="Offline">Offline Academic</option>
                                            <option value="Summer">Summer Program 2026</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-orange-400">▼</div>
                                    </div>
                                </div>
                                <div className="pb-4">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">City / Area *</label>
                                    <input name="city" required value={formData.city} onChange={handleChange} type="text" className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="e.g. Bhubaneswar" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                                    <input name="Email" required value={formData.email} onChange={handleChange} type="text" className="w-full p-4 bg-slate-50 rounded-2xl border border-transparent focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="Enter email" />
                                </div>
                            </div>



                            <button disabled={isLoading} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 active:scale-95 transition-all shadow-xl shadow-blue-500/30 uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed">
                                {isLoading ? "Processing..." : "Submit Enquiry"} <Send size={20} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EnquiryForm;
