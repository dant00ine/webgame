const express = require('express');
const app = express();

app.use(express.static('public'));

const path = require('path');

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen('1338', console.log("**/*** listening on 1338 ***/**"));
