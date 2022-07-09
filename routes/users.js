const express = require('express');
const router = express.Router();
const { body, validationResult, check } = require('express-validator');

const User = require('../models/User');

// @route       POST api/users
// @desc        Register a user
// @access      Public


router.post(
  '/',
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more character'
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }

    res.send('passed');
  }
);

// @route       GET api/users
// @desc        Get all users
// @access      Public
router.get('/', (req, res) => {
  res.send('Get all users');
});

// @route       GET api/user
// @desc        Get a single user
// @access      Public
router.get('/', (req, res) => {
  res.send('Get a single user');
});

module.exports = router;
