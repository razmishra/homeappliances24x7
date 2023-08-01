const express = require('express');
const get = require('../controller/get');
const sendEmail = require('../controller/sendEmail');
const router = express.Router();

router.get('/', get)

router.post("/registration/mail", sendEmail)

module.exports = router;