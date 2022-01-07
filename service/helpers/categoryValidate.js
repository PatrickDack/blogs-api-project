const { voidName } = require('./validate');

module.exports = (req, _res, next) => {
  const { name } = req.body;

  if (voidName(name)) return next(voidName(name));

  next();
};
