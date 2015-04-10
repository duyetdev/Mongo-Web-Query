'use strict';

var express = require('express');
var controller = require('./query.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.queryData);
module.exports = router;