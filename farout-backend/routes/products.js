const express = require('express');
const router = express.Router();
const ProductControler = require('../controller/product');
const multer = require('multer');
const path = require('path');

// Product Routes
const upload = multer({ dest: path.join(__dirname,'../img') });



router.get('/all', ProductControler.getall);
router.get('/men', ProductControler.getmensproduct);
router.get('/women', ProductControler.getwomensproduct);
router.get('/kids', ProductControler.getkidsproduct);
router.post('/create',upload.single('image'), ProductControler.create);
router.get('/count', ProductControler.getcount);
router.get('/:objectId', ProductControler.getById);



module.exports = router;