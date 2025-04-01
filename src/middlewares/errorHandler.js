const { AppError } = require("@/classes/errors.js");

function errorHandler(err, req, res, next) {
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Something went wrong",
    ...(process.env.NODE_ENV !== "production" && {
      stack: err.stack,
      error: err,
    }),
  });
}

module.exports = errorHandler;
