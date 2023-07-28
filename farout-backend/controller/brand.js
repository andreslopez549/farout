const express = require('express');
const productmodel = require('../models/product');
const brandmodel = require('../models/brands');

const create = async (req, res, next) => {

    try {
        console.log(req.body);
        if (req.body.name) {

            brand = await brandmodel.create(req.body);
            return res.status(200).json({ message: "Brand Created Successfully", data: brand });
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

    const brand = await brandmodel.findOne({ _id: id });

    if (!brand) {
        return res.status(404).send('Brand not found')
    }
    res.json({ message: "Brand Fetched Successfully", brand: brand })

}

const getall = async (req, res, next) => {
    const brand = await brandmodel.find({ "status": true });
    res.json({ message: "All Brands Fetched Successfully", brand: brand })
}

const getcount = async (req, res, next) => {
    const product = await brandmodel.find({});
    res.json({ totalbrands: product.length })
}
const edit = async (req, res, next) => {
    try {
        const updatedResult =
            await brandmodel.findByIdAndUpdate(
                { _id: req.params.id },
                req.body,
                {
                    new: true
                }
            );
        console.log(updatedResult);
        res.json({ message: "Brand Updated Successfully", product: updatedResult })

    }
    catch (err) {

        console.error(err.message);
        return res.status(500).send('Server error');
    }

};

const deletebrand = async (req, res) => {

    console.log(req.params.objectId, "idd")

    await brandmodel.findByIdAndUpdate(
        { _id: req.params.objectId },
        { "status": false }
    );

    res.json({ message: "brand deleted Successfully" })
}


module.exports = {
    create,
    getById,
    getall,
    getcount,
    edit,
    deletebrand
}