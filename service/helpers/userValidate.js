const validate = require('./validate');

module.exports = async (req, _res, next) => {
  const { displayName, email, password } = req.body;
  if (validate.nameValid(displayName)) return next(validate.nameValid(displayName));
  if (validate.emailValid(email)) return next(validate.emailValid(email));
  if (validate.passwordValid(password)) return next(validate.passwordValid(password));
  if (await validate.binateEmail(email)) return next(await validate.binateEmail(email));

  return next();
};
