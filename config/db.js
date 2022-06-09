const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster1.21hop.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`);
        console.log(`MongoDB is connected: ${connect.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err}`.red.underline);
    }
}

module.exports = connectDB;