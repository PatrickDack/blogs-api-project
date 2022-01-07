const express = require('express');
const categoryValidate = require('../service/helpers/categoryValidate');
const categoryService = require('../service/categoryService');

const router = express.Router();

router.post('/', categoryValidate, async (req, res, next) => {
  try {
    const obj = req.body;

    const newCategory = await categoryService.create(obj);

    if (newCategory.code) {
      return next(newCategory);
    }

    res.status(201).json(newCategory);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;