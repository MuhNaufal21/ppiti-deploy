const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello dari Node.js Version</h1>');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});