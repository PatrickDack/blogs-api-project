const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const { pattern, response } = require('../../service/helpers/validate');
const { User } = require('../../models');

const secret = '123';

module.exports = rescue(async (req, _res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return next(response(pattern.UNAUTHORIZED, pattern.NOT_TOKEN));
    }

      const decoded = jwt.verify(token, secret);

      const user = await User.findOne({ where: { email: decoded.data.email } });

      // if (!user) {
      //   return next(sendError(STATUS.BAD_REQUEST, STATUS.INCORRECT_USER_OR_PASS));
      // }

      req.user = user;
  } catch (e) {
    console.log(e.message);
    next({ ...e, code: pattern.UNAUTHORIZED, message: pattern.EXP_IVALID_TOKEN });
  }

    next();
});