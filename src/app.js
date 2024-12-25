const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Route handling
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Server setup
app.listen(8080, () => {
    console.log('server listening on port 8080');
});
