const express = require('express');
const router = express.Router();
const ProductControler = require('../controller/product');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
// Product Routes
// const upload = multer({ dest: path.join(__dirname,'../img') });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images/'); // File storage location
    },
    filename: function (req, file, cb) {

        const uniqueFilename = uuidv4(); // Generate a unique filename using UUID
        const fileExtension = file.originalname.split('.').pop(); // Get the file extension
        cb(null,  Date.now() + '-' + uniqueFilename + '.' + fileExtension); // File naming
    }
  });
  
 const upload = multer({ storage: storage });
router.get('/all', ProductControler.getall);
router.get('/men', ProductControler.getmensproduct);
router.get('/women', ProductControler.getwomensproduct);
router.get('/kids', ProductControler.getkidsproduct);
router.post('/create',upload.array('image',10), ProductControler.create);
router.get('/count', ProductControler.getcount);
router.put('/edit/:objectId',upload.array('image',10), ProductControler.edit);
router.get('/:objectId', ProductControler.getById);
router.delete('/:objectId', ProductControler.deleteproduct);




module.exports = router;