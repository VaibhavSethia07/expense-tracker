const {
  http_request_duration_milliseconds,
  getRequestCounter,
  postRequestCounter,
  deleteRequestCounter,
  activeRequestsGauge,
  httpDurationHistogram,
} = require("../config/prometheus");

const calculateResponseTime = (req, res) => {
  const responseTimeInMilliseconds = Date.now() - res.locals.startEpoch;

  http_request_duration_milliseconds
    .labels({
      method: req.method,
      route: req.originalUrl,
      statusCode: res.statusCode,
    })
    .observe(responseTimeInMilliseconds);
};

// Middleware function to handle GET requests
function handleGetRequest(req, res, next) {
  getRequestCounter.labels(req.path, req.method, res.statusCode).inc();
  activeRequestsGauge.inc();

  const endTimer = httpDurationHistogram
    .labels(req.path, req.method, "")
    .startTimer();

  res.on("finish", () => {
    endTimer({ status: 200 });
    activeRequestsGauge.dec();
  });

  next();
}

// Middleware function to handle POST requests
function handlePostRequest(req, res, next) {
  postRequestCounter.labels(req.path, req.method, res.statusCode).inc();
  activeRequestsGauge.inc();

  const endTimer = httpDurationHistogram
    .labels(req.path, req.method, "")
    .startTimer();

  res.on("finish", () => {
    endTimer({ status: 201 });
    activeRequestsGauge.dec();
  });

  next();
}

// Middleware function to handle DELETE requests
function handleDeleteRequest(req, res, next) {
  deleteRequestCounter.labels(req.path, req.method, res.statusCode).inc();
  activeRequestsGauge.inc();

  const endTimer = httpDurationHistogram
    .labels(req.path, req.method, "")
    .startTimer();

  res.on("finish", () => {
    endTimer({ status: 204 });
    activeRequestsGauge.dec();
  });

  next();
}

module.exports = {
  calculateResponseTime,
  handleGetRequest,
  handlePostRequest,
  handleDeleteRequest,
};
