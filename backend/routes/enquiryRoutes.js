const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// POST /api/enquiries - Submit a new enquiry
router.post('/', async (req, res) => {
    console.log('Received enquiry submission:', req.body);
    try {
        const newEnquiry = new Enquiry(req.body);
        const savedEnquiry = await newEnquiry.save();
        console.log('Enquiry saved successfully:', savedEnquiry);
        res.status(201).json({ success: true, data: savedEnquiry, message: 'Enquiry submitted successfully' });
    } catch (error) {
        console.error('Submission Error:', error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
});

module.exports = router;
