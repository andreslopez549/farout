const express = require('express');
const productmodel = require('../models/product');
const fs = require('fs');
const path = require('path');



const create = async (req, res, next) => {
    const product_images = [];

    try {
        console.log(req.body)
        const { name, imagelink, categories, price, brand } = req.body;
        let product = await productmodel.findOne({ name });
        if (product) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Product already exists' }] });
        }

        if (req.files) {
            req.files.forEach(file => {
                product_images.push(file.filename);
            });
            req.body.images = product_images
        }



        product = new productmodel(
            req.body
        );

        await product.save();
        return res.json({ message: "Product Created Successfully", data: product });

    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }

};

const getById = async (req, res, next) => {

    const id = req.params.objectId;

    const product = await productmodel.findOne({ _id: id });

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json({ message: "Product Fetched Successfully", product: product })

}

const getall = async (req, res, next) => {
    const product = await productmodel.find({ "status": true }).sort({age:-1});
    res.json({ message: "All Product Fetched Successfully", product: product })
}

const getcount = async (req, res, next) => {
    const product = await productmodel.find({ "status": true });
    res.json({ totalProducts: product.length })
}

const getmensproduct = async (req, res, next) => {
    const product = await productmodel.find({ "type": "Men", "status": true });
    res.json({ message: "All Product Fetched Successfully", product: product })
}

const getwomensproduct = async (req, res, next) => {
    const product = await productmodel.find({ "type": "Women" });
    res.json({ message: "All Product Fetched Successfully", product: product })
}

const getkidsproduct = async (req, res, next) => {
    const product = await productmodel.find({ "type": "Kids" });
    res.json({ message: "All Product Fetched Successfully", product: product })
}

const edit = async (req, res, next) => {
    try {

        // console.log(req.files,"iddd");
        if (req.files.length > 0) {
            const product_images = [];
            req.files.forEach(file => {
                product_images.push(file.filename);
            });
            req.body.images = product_images
        }
        const updatedResult =
            await productmodel.findByIdAndUpdate(
                { _id: req.params.objectId },
                req.body,
                {
                    new: true
                }
            );
        // console.log(updatedResult);

        res.json({ message: "Product Updated Successfully", product: updatedResult })

    }
    catch (err) {

        console.error(err.message);
        return res.status(500).send('Server error');
    }

};

const deleteproduct = async (req, res) => {
     
    console.log(req.params.objectId,"idd")

    await productmodel.findByIdAndUpdate(
        { _id: req.params.objectId },
        { "status": false }
    );

    res.json({ message: "Product deleted Successfully" })
}



module.exports = {
    create,
    getById,
    getall,
    getcount,
    getmensproduct,
    getwomensproduct,
    getkidsproduct,
    edit,
    deleteproduct
}