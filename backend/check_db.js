const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Define Schema (Must match backend)
const EnquirySchema = new mongoose.Schema({
    studentName: String,
    parentName: String,
    course: String,
    createdAt: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('Enquiry', EnquirySchema);

async function checkData() {
    try {
        await mongoose.connect('mongodb://localhost:27017/vision-academy');
        console.log("Connected to MongoDB...");

        const count = await Enquiry.countDocuments();
        console.log(`\nTotal Enquiries Found: ${count}`);

        if (count > 0) {
            const enquiries = await Enquiry.find().sort({ createdAt: -1 });
            console.log("\nLast 5 Enquiries:");
            enquiries.slice(0, 5).forEach((e, i) => {
                console.log(`${i + 1}. [${e.createdAt.toISOString()}] ${e.studentName} - ${e.course}`);
            });
        } else {
            console.log("No enquiries found in the 'enquiries' collection.");
        }

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await mongoose.connection.close();
    }
}

checkData();
