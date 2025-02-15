const express = require('express');
const testController = require('../controllers/testController');

const router = new express.Router();

router.get('/',testController.getAll);

module.exports = router;
