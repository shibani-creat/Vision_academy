const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    parentName: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String },
    altMobile: { type: String },
    schoolType: {
        type: String,
        required: true,
        enum: ['OAV', 'Navadaya', 'Private']
    },
    currentClass: { type: String, required: true },
    prevGrade: {
        type: String,
        enum: ['A', 'B', 'C']
    },
    course: {
        type: String,
        required: true,
        enum: ['Online', 'Offline', 'Summer']
    },
    city: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Enquiry', EnquirySchema);
