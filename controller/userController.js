const express = require('express');
const auth = require('../helpers/auth/auth');
const userValidate = require('../service/helpers/userValidate');
// const rescue = require('express-rescue');
const userService = require('../service/userService');

const router = express.Router();

router.post('/', userValidate, async (req, res, next) => {
  try {
    const obj = req.body;
    const token = await userService.create(obj);

    return res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
});

router.get('/', auth, async (req, res, next) => {
  try {
    const users = await userService.getAll();

    if (users.code) {
      return next(users);
    }

    res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
});

module.exports = router;
