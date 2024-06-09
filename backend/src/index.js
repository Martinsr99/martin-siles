const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/projects', (req, res) => {
    res.json([]);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
