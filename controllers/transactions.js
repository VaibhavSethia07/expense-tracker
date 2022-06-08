// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  public
exports.getTransactions = (_req, res, _next) => {
    res.send('GET transactions')
}

// @desc    Add a transaction
// @route   POST /api/v1/transaction
// @access  public
exports.addTransaction = (_req, res, _next) => {
    res.send('POST transaction');
}

// @desc    Delete a transaction
// @route   /api/v1/transaction/:id
// @access  public
exports.deleteTransaction = (_req, res, _next) => {
    res.send('DELETE transaction');
}

