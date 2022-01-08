const express = require('express');
const postService = require('../service/postService');
const postValidate = require('../service/helpers/postValidate');

const router = express.Router();

router.post('/', postValidate, async (req, res, next) => {
  try {
    const obj = req.body;
    const { id } = req.user;
    const newPost = await postService.create({ userId: id, ...obj });

    res.status(201).json(newPost);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
