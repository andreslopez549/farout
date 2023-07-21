const express = require('express');
const router = express.Router();
const categoryControler = require('../controller/category');

router.get('/all', categoryControler.getall);
router.post('/create', categoryControler.create);
router.get('/count', categoryControler.getcount);

module.exports = router;