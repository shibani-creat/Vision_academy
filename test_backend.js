const http = require('http');

const data = JSON.stringify({
    studentName: 'Test Script',
    parentName: 'Test Parent',
    mobile: '1234567890',
    schoolType: 'Private',
    currentClass: '10',
    prevGrade: 'A',
    course: 'Online',
    city: 'Test City'
});

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/enquiries',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    let fullBody = ''; // Initialize a variable to accumulate the body
    res.on('data', (chunk) => {
        fullBody += chunk; // Append each chunk to fullBody
    });
    res.on('end', () => {
        console.log(`BODY: ${fullBody}`); // Log the full body once all chunks are received
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(data);
req.end();
