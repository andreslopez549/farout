const express = require('express');
const productmodel = require('../models/product');
const categorymodel = require('../models/category');

const create = async  (req, res, next) => {
  
    try {
        console.log(req.body);
        if(req.body.name){
           
          category=await categorymodel.create(req.body);
        return res.status(200).json({ message: "Category Created Successfully", data: category });
        }
        return res.status(500).json({ message: "Category Name Required" });
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }

};

const getById = async (req, res, next) => {
    const id = req.params.objectId;
 
    const product = await categorymodel.findOne({ _id:id });

        if (!product) {
        return res.status(404).send('Product not found')
      }
    res.json({message: "Product Fetched Successfully", product: product})

}

const getall = async (req, res, next) => {
    const category = await categorymodel.find({});
    res.json({message: "All Categories Fetched Successfully", category: category})
}

const getcount = async (req, res, next) => {
    const product = await categorymodel.find({});
    res.json({totalcategories: product.length})
}



module.exports = {
    create,
    getById,
    getall,
    getcount
}