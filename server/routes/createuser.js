const express = require('express');
const router = express.Router();


//import from controllers
const { createUser } = require('../controllers/createuser')

router.post('/createUser', createUser);

module.exports = router;