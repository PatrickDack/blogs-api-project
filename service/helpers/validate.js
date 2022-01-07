const { User } = require('../../models');

// console.log(sequelize);

const pattern = {
  BAD_REQUEST: 400,
  CONFLICT: 409,
  REG_EMAIL: /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/,
  NAME_LENGTH: '"displayName" length must be at least 8 characters long',
  INVALID_EMAIL: '"email" must be a valid email',
  VOID_EMAIL: '"email" is required',
  PASS_LENGTH: '"password" length must be 6 characters long',
  VOID_PASS: '"password" is required',
  BINATE: 'User already registered',
};

const response = (code, message) => ({
  code,
  message,
});

const nameValid = (name) => {
  if (name.length < 8) {
    return response(pattern.BAD_REQUEST, pattern.NAME_LENGTH);
  }
};

const emailValid = (email) => {
  if (!email) {
    return response(pattern.BAD_REQUEST, pattern.VOID_EMAIL);
  }

  if (!email.match(pattern.REG_EMAIL)) {
    return response(pattern.BAD_REQUEST, pattern.INVALID_EMAIL);
  }
};

const passwordValid = (password) => {
  if (!password) {
    return response(pattern.BAD_REQUEST, pattern.VOID_PASS);
  }

  if (password.length !== 6) {
    return response(pattern.BAD_REQUEST, pattern.PASS_LENGTH);
  }
};

const binateEmail = async (email) => {
  const binate = await User.findOne({ where: { email } });
  console.log('one');
  if (binate) {
    return response(pattern.CONFLICT, pattern.BINATE);
  }
};

module.exports = {
  pattern,
  nameValid,
  emailValid,
  binateEmail,
  passwordValid,
  response,
};
