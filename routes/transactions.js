const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transactions");
const {
  handleGetRequest,
  handlePostRequest,
  handleDeleteRequest,
} = require("../middlewares/prometheus");

const { http_request_counter } = require("../config/prometheus");

router.use(function (req, res, next) {
  // Increment the HTTP request counter
  http_request_counter
    .labels({
      method: req.method,
      route: req.originalUrl,
      statusCode: res.statusCode,
    })
    .inc();

  next();
});

router.use(function (req, res, next) {
  // Start a timer for every request made
  res.locals.startEpoch = Date.now();

  next();
});

router
  .route("/")
  .get(handleGetRequest, getTransactions)
  .post(handlePostRequest, addTransaction);

router.route("/:id").delete(handleDeleteRequest, deleteTransaction);

module.exports = router;
