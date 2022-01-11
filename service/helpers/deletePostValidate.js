const { loggedUserCheck } = require('./validate');

module.exports = async (req, _res, next) => {
  const { id } = req.params;
  const loggedUserId = req.user.id;

  if (await loggedUserCheck(id, loggedUserId)) return next(await loggedUserCheck(id, loggedUserId));

  next();
};
