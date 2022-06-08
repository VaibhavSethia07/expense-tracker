const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    text: {
        type: String,
        // To remove whitespaces
        trim: true,
        // This text will be shown in the validation error
        required: [true, 'Enter some text']
    },
    amount: {
        type: Number,
        required: [true, 'Enter some amount']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;