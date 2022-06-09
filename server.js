const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
dotenv.config({ path: './config/config.env' });
const transactions = require('./routes/transactions');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

app.use(express.json());

if (process.env.NODE_ENV == "development") {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

app.listen(PORT, (_req, _res) => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow.bold);
    connectDB();
});