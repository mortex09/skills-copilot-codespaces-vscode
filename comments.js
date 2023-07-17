//Create web server
const express = require('express');
const app = express();

//Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Create a route
app.get('/api/comments', (req, res) => {
    res.send([1, 2, 3]);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));