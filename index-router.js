const express = require('express');
const currencyRoutes = require('./Routes/currencies.routes');
const userRoutes = require('./Routes/users.routes');

const app = express();
const port = 8083;

// using path '/currencies' instead of '/'
app.use('/currencies', currencyRoutes);

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Using Routes: Server listening at the port ${port}`);
})