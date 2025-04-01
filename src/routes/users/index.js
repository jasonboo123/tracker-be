const express = require('express');
const router = express.Router();

const loginRoutes = require('./login'); // import login folder as a sub-router

router.use('/login', loginRoutes); // now supports POST /users/login

module.exports = router;
