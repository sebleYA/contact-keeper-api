const express = require('express');
const router = express.Router();

// @route       POST api/users
// @desc        Register a user
// @access      Public
router.post('/', (req, res) => {
    res.send('Register a user')

})

// @route       GET api/users
// @desc        Get all users
// @access      Public
router.get('/', (req, res) => {
    res.send('Get all users')

})

// @route       GET api/user
// @desc        Get a single user
// @access      Public
router.get('/', (req, res) => {
    res.send('Get a single user')

})





module.exports = router; 