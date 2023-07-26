const express = require('express');
const productmodel = require('../models/product');
const fs =require('fs');
const path = require('path');
const multer = require('multer');



const create = async  (req, res, next) => {
  
   

    try {
          console.log(req.body)
        const { name, imagelink, categories,price,brand } = req.body;
        let product = await productmodel.findOne({ name });
       
        if(req.file){

      

           const extension=  path.extname(req.file.originalname)
          

            const uploadedFilePath = req.file.path;
            var dir = __dirname + `/uploads/images}`;
             
            filename=req.file.filename+extension;
           
            const destinationFilePath = path.join(__dirname,`../uploads/images`, filename);
              
          
            

            fs.rename(uploadedFilePath, destinationFilePath, (error) => {
                if (error) {
                  console.error(error);
                 
                }
                console.log(destinationFilePath,'get files success');
              
              });
              req.body.images=filename
        }
           


        product = new productmodel(
            req.body
        );

        await product.save();
      
        console.log(product._id)
          
        return res.json({ message: "Product Created Successfully", data: product });

    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }

};

const getById = async (req, res, next) => {
    const id = req.params.objectId;
 
    const product = await productmodel.findOne({ _id:id });

        if (!product) {
        return res.status(404).send('Product not found')
      }
    res.json({message: "Product Fetched Successfully", product: product})

}

const getall = async (req, res, next) => {
    const product = await productmodel.find({});
    res.json({message: "All Product Fetched Successfully", product: product})
}

const getcount = async (req, res, next) => {
    const product = await productmodel.find({});
    res.json({totalProducts: product.length})
}

const getmensproduct = async (req, res, next) => {
    const product = await productmodel.find({"type":"Men"});
    res.json({message: "All Product Fetched Successfully", product: product})
}
const getwomensproduct = async (req, res, next) => {
    const product = await productmodel.find({"type":"Women"});
    res.json({message: "All Product Fetched Successfully", product: product})
}
const getkidsproduct = async (req, res, next) => {
    const product = await productmodel.find({"type":"Kids"});
    res.json({message: "All Product Fetched Successfully", product: product})
}



module.exports = {
    create,
    getById,
    getall,
    getcount,
    getmensproduct,
    getwomensproduct,
    getkidsproduct
}