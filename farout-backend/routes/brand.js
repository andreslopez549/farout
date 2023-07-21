const express = require('express');
const router = express.Router();
const brandControler = require('../controller/brand');

router.get('/all', brandControler.getall);
router.post('/create', brandControler.create);
router.get('/count', brandControler.getcount);

module.exports = router;