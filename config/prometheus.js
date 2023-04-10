const prometheus = require("prom-client");
const register = new prometheus.Registry();

register.setDefaultLabels({
  app: "expense-tracker",
});

prometheus.collectDefaultMetrics({ register });

const http_request_counter = new prometheus.Counter({
  name: "expense_tracker_http_request_count",
  help: "Count of HTTP requests made to Expsense Tracker",
  labelNames: ["method", "route", "statusCode"],
});
register.registerMetric(http_request_counter);

const http_request_duration_milliseconds = new prometheus.Histogram({
  name: "expense_tracker_http_request_duration_milliseconds",
  help: "Duration of HTTP requests in milliseconds.",
  labelNames: ["method", "route", "statusCode"],
  buckets: [1, 2, 3, 4, 5, 10, 25, 50, 100, 250, 500, 1000],
});
register.registerMetric(http_request_duration_milliseconds);

const memoryUsageGauge = new prometheus.Gauge({
  name: "memory_usage_bytes",
  help: "Current memory usage in bytes",
});
register.registerMetric(memoryUsageGauge);

// Create a new counter for each endpoint
const getRequestCounter = new prometheus.Counter({
  name: "expense_tracker_http_get_requests_total",
  help: "Total number of HTTP requests for GET endpoint",
  labelNames: ["endpoint", "method", "status"],
});
register.registerMetric(getRequestCounter);

const postRequestCounter = new prometheus.Counter({
  name: "expense_tracker_http_post_requests_total",
  help: "Total number of HTTP requests for POST endpoint",
  labelNames: ["endpoint", "method", "status"],
});
register.registerMetric(postRequestCounter);

const deleteRequestCounter = new prometheus.Counter({
  name: "expense_tracker_http_delete_requests_total",
  help: "Total number of HTTP requests for DELETE endpoint",
  labelNames: ["endpoint", "method", "status"],
});
register.registerMetric(deleteRequestCounter);

const activeRequestsGauge = new prometheus.Gauge({
  name: "expense_tracker_active_requests",
  help: "Number of active requests",
});
register.registerMetric(activeRequestsGauge);

const httpDurationHistogram = new prometheus.Histogram({
  name: "expense_tracker_http_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  buckets: [0.01, 0.1, 1, 5, 10],
  labelNames: ["endpoint", "method", "status"],
});
register.registerMetric(httpDurationHistogram);

setInterval(() => {
  const memoryUsage = process.memoryUsage();
  memoryUsageGauge.set(memoryUsage.rss);
}, 5000);

module.exports = {
  prometheus,
  http_request_counter,
  http_request_duration_milliseconds,
  activeRequestsGauge,
  httpDurationHistogram,
  getRequestCounter,
  postRequestCounter,
  deleteRequestCounter,
  register,
};
