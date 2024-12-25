const express = require('express');
const path = require('path');

// Multer is a node.js middleware for handling multipart/form-data.
const multer = require('multer');

const app = express();
const upload = multer();

// Serve static files.
app.use(express.static(path.join(__dirname, '../public')));

// ======================================================
// Route handling
// ======================================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/generate', upload.none(), (req, res) => {
    const input_text = req.body.input_text;

    // For now, send the text back as a response
    res.send(`<h1>QR Code generated for: ${input_text}</h1>`);
});

// ======================================================
// Server setup
// ======================================================
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
