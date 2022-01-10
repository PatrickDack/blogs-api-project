const { voidTitle, voidContent, checkCategory, loggedUserCheck } = require('./validate');

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.params;
  const loggedUserId = req.user.id;

  if (voidTitle(title)) return next(voidTitle(title));
  if (voidContent(content)) return next(voidContent(content));
  if (checkCategory(categoryIds)) return next(checkCategory(categoryIds));
  if (await loggedUserCheck(id, loggedUserId)) return next(await loggedUserCheck(id, loggedUserId));

  next();
};
