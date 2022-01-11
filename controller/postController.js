const express = require('express');
const postService = require('../service/postService');
const postValidate = require('../service/helpers/postValidate');
const putPostValidate = require('../service/helpers/putPostValidate');
const deletePostValidate = require('../service/helpers/deletePostValidate');

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

router.get('/search', async (req, res, next) => {
  try {
    const { q } = req.query;

    const posts = await postService.findByQuery(q);

    res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const posts = await postService.getAll();

    res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await postService.getById(id);

    if (post.code) return next(post);

    res.status(200).json(post);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.put('/:id', putPostValidate, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const post = await postService.update(id, title, content);

    if (post.code) return next(post);

    res.status(200).json(post);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.delete('/:id', deletePostValidate, async (req, res, next) => {
  try {
    const { id } = req.params;

    await postService.destroy(id);

    res.status(204).end();
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
