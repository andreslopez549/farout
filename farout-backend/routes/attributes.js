const express = require('express');
const router = express.Router();
const attributeControler = require('../controller/attribute');

router.get('/all', attributeControler.getall);
router.post('/create', attributeControler.create);
router.get('/count', attributeControler.getcount);
router.get('/show/:id', attributeControler.getById);
router.put('/edit/:id', attributeControler.edit);


module.exports = router;