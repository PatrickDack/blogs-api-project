const userValid = require('./validate');

module.exports = async (req, _res, next) => {
  const { displayName, email, password } = req.body;
  if (userValid.nameValid(displayName)) return next(userValid.nameValid(displayName));
  if (userValid.emailValid(email)) return next(userValid.emailValid(email));
  if (userValid.passwordValid(password)) return next(userValid.passwordValid(password));
  if (await userValid.binateEmail(email)) return next(await userValid.binateEmail(email));

  return next();
};
