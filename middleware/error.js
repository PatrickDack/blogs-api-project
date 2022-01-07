const error = (err, _req, res, _next) => {
  if (!err.code) {
    err.code = 500;
  }
  return res.status(err.code).json({ message: err.message });
};

module.exports = error;
