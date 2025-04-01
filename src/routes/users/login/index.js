const express = require('express');
const router = express.Router();

const postLogin = require('./post');
router.post('/', postLogin); // POST /users/login

module.exports = router;
