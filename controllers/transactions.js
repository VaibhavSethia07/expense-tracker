const Transaction = require("../models/Transaction");
const { calculateResponseTime } = require("../middlewares/prometheus");
const { httpDurationHistogram } = require("../config/prometheus");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  public
exports.getTransactions = async (req, res, next) => {
  const end = httpDurationHistogram.startTimer();
  try {
    const transactions = await Transaction.find();
    // end({ endpoint: req.route.path, method: "GET" });
    res.status(200).json({
      succcess: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }

  calculateResponseTime(req, res);
  end({ endpoint: req.route.path, method: "GET" });
};

// @desc    Add a transaction
// @route   POST /api/v1/transactions
// @access  public
exports.addTransaction = async (req, res, next) => {
  const end = httpDurationHistogram.startTimer();
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create({ text, amount });

    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.messages);
      // Client side error
      res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      res.status(500).json({
        success: false,
        error: "Server error",
      });
    }
  }

  calculateResponseTime(req, res);
  end({ endpoint: req.route.path, method: "POST" });
};

// @desc    Delete a transaction
// @route   /api/v1/transactions/:id
// @access  public
exports.deleteTransaction = async (req, res, next) => {
  const end = httpDurationHistogram.startTimer();
  try {
    const _id = req.params.id;
    const transaction = await Transaction.findById(_id);
    if (!transaction) {
      res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
    transaction.remove();
    res.status(204).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }

  calculateResponseTime(req, res);
  end({ endpoint: req.route.path, method: "DELETE" });
};
