const express = require('express');
const path = require('path');

// Multer is a node.js middleware for handling multipart/form-data.
const multer = require('multer');

const app = express();
const upload = multer();
const QRCode = require('qrcode');

// Serve static files.
app.use(express.static(path.join(__dirname, '../public')));

// ======================================================
// Route handling
// ======================================================
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/generate', upload.none(), async (req, res) => {
    const input_text = req.body.input_text;

    const qr_code_image = await QRCode.toDataURL(input_text);
    res.send(`
        <div class="flex flex-col gap-2 justify-center">
            <img src="${qr_code_image}" alt="QR Code"/>
            <h1>QR code generated for: ${input_text}</h1>
            <button id="clear" class="text-xs text-red-500 italic hover:text-red-900" type="button">
                Clear
            </button>
        </div>
    `);
});

// ======================================================
// Server setup
// ======================================================
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
