const { voidCategoryIds, voidTitle, voidContent, categoryVerify } = require('./validate');

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (voidTitle(title)) return next(voidTitle(title));
  if (voidContent(content)) return next(voidContent(content));
  if (voidCategoryIds(categoryIds)) return next(voidCategoryIds(categoryIds));
  if (await categoryVerify(categoryIds)) return next(await categoryVerify(categoryIds));

  next();
};
