const express = require('express');
const router = express.Router();


//import controllers
const { getUser } = require('../controllers/getuser')


//routes
router.get('./users', getUser)


module.exports = router;