const validate = require('./validate');

module.exports = async (req, _res, next) => {
  const { email, password } = req.body;
  if (validate.emailValid(email)) return next(validate.emailValid(email));
  if (validate.passwordValid(password)) return next(validate.passwordValid(password));

  return next();
};
