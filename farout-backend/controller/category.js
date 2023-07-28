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
 
    const category = await categorymodel.findOne({ _id:id });
    // console.log(category)
        if (!category) {
        return res.status(404).send('Category not found')
      }
    res.json({message: "Category Fetched Successfully", category: category})

}

const getall = async (req, res, next) => {
    const category = await categorymodel.find({"status":true});
    res.json({message: "All Categories Fetched Successfully", category: category})
}

const getcount = async (req, res) => {
    const product = await categorymodel.count();
    // console.log(product);
    res.json({totalcategories: product})
}

const edit = async  (req, res, next) => {
    try {
        const updatedResult =
        await categorymodel.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true
            }
        );
    console.log(updatedResult);
        res.json({message: "Category Updated Successfully", product: updatedResult})
      
    }
    catch (err) {
        
        console.error(err.message);
        return res.status(500).send('Server error');
    }

};

const deletecategory = async (req, res) => {
     
    console.log(req.params.objectId,"idd")

    await categorymodel.findByIdAndUpdate(
        { _id: req.params.objectId },
        { "status": false }
    );

    res.json({ message: "Category deleted Successfully" })
}

module.exports = {
    create,
    getById,
    getall,
    getcount,
    edit,
    deletecategory
}