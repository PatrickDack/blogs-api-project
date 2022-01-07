const express = require('express');
// const rescue = require('express-rescue');
const userService = require('../service/userService');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const obj = req.body;
    const newUser = await userService.create(obj);
    console.log(newUser);

    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
});

module.exports = router;
