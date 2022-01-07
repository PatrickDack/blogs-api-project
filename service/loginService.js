const jwt = require('jsonwebtoken');
const { emailValid, passwordValid, pattern, response } = require('./helpers/validate');

const SECRET = '123';

const jwtConfig = {
  expiresIn: '10m',
  algorithm: 'HS256',
};

module.exports = async (email, password) => {
  if (validEmail(email, password)) return sendError(STATUS.UNAUTHORIZED, STATUS.ALL_FIELDS);

  const user = await checkEmail(email);

  if (!user || user.password !== password) {
    return sendError(STATUS.UNAUTHORIZED, STATUS.INCORRECT_USER_OR_PASS);
  }

  const token = jwt.sign({ data: user }, SECRET, jwtConfig);

  return token;
};