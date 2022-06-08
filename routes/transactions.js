const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

// router.get('/', getTransactions)
//     .post('/', (_req, res) => res.send('Add transactions'))
//     .delete('/:id', (_req, res) => res.send('Delete transaction'))

// OR

router.route('/').get(getTransactions)
    .post(addTransaction);

router.route('/:id').delete(deleteTransaction);

module.exports = router;

