const express = require('express');
const attributemodel = require('../models/attributes');

const create = async  (req, res, next) => {
    console.log(req.body);
    const { name, description, units } = req.body;
    try {
        console.log(req.body);
        if(req.body.name){
            
          attribute=await attributemodel.create({ name, description, units });
        return res.status(200).json({ message: "Attribute Created Successfully", data: attribute });
        }
        return res.status(500).json({ message: "Attribute Name Required" });
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }

};
const edit = async  (req, res, next) => {
    try {
        const updatedResult =
        await attributemodel.findByIdAndUpdate(
            { _id: req.params.id },
            req.body,
            {
                new: true
            }
        );
    console.log(updatedResult);
        res.json({message: "Attribute Updated Successfully", data: updatedResult})
      
    }
    catch (err) {
        
        console.error(err.message);
        return res.status(500).send('Server error');
    }

};
const getById = async (req, res, next) => {
    const id = req.params.id;
 
    const attribute = await attributemodel.findOne({ _id:id });

        if (!attribute) {
        return res.status(404).send('Attribute not found')
      }
    res.json({message: "Attribute Fetched Successfully", data: attribute})

}

const getall = async (req, res, next) => {
    const attribute = await attributemodel.find({});
    res.json({message: "All Attribute Fetched Successfully", data: attribute})
}

const getcount = async (req, res, next) => {
    const attribute = await attributemodel.find({});
    res.json({totalAttributes: attribute.length})
}

module.exports = {
    create,
    getById,
    getall,
    getcount,
    edit
}