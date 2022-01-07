const express = require('express');
// const rescue = require('express-rescue');
const userService = require('../service/userService');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const obj = req.body;
    const token = await userService.create(obj);

    return res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    return next(e);
  }
});

module.exports = router;
