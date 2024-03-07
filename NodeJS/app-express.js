const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
    res.send('Hello world, from my local server');
});

app.listen(port, () => {
    console.log(`Express server started in the port ${port}`);
})