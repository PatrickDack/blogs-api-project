const rescue = require('express-rescue');
const loginService = require('../service/loginService');

module.exports = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  const token = await loginService(email, password);
  if (token.code) return next(token);

  return res.status(200).json({ token });
});