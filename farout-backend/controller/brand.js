const express = require('express');
const productmodel = require('../models/product');
const brandmodel = require('../models/brands');

const create = async  (req, res, next) => {
  
    try {
        console.log(req.body);
        if(req.body.name){
           
          category=await brandmodel.create(req.body);
        return res.status(200).json({ message: "Brand Created Successfully", data: category });
        }
        return res.status(500).json({ message: "Brand Name Required" });
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }

};

const getById = async (req, res, next) => {
    const id = req.params.objectId;
 
    const product = await brandmodel.findOne({ _id:id });

        if (!product) {
        return res.status(404).send('Product not found')
      }
    res.json({message: "Product Fetched Successfully", product: product})

}

const getall = async (req, res, next) => {
    const category = await brandmodel.find({});
    res.json({message: "All Brands Fetched Successfully", brand: category})
}

const getcount = async (req, res, next) => {
    const product = await brandmodel.find({});
    res.json({totalbrands: product.length})
}



module.exports = {
    create,
    getById,
    getall,
    getcount
}