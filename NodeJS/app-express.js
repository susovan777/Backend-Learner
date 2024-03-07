const express = require('express');
const app = express();
const port = 8081;

const todos = ["Complete nodeJS byte", "Play COC" ]

app.get('/todos', (req, res) => {
    // res.send('Hello world, from my local server');
    res.send(todos);
});

app.listen(port, () => {
    console.log(`Express server started in the port ${port}`);
})