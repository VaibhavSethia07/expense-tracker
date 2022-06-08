const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const transactions = require('./routes/transactions');
const app = express();

dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 5000;

app.use('/api/v1/transactions', transactions);

app.listen(PORT, (_req, _res) => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow.bold);
});