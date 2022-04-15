const express = require('express');
const auth = require('../../middlewares/auth');
const login = require('./login');

const router = express.Router({ mergeParams: true });

router.post('/', auth, login);

module.exports = router;
