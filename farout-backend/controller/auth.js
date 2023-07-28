const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtconfig = require('../config/jwt'); 
const User = require('../models/user');


const register = async (req, res) => {
    const { email, password } = req.body;
// console.log(email)
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email)
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
            

        const payload = { id: user._id ,role:user.role};
        const token = jwt.sign(payload, jwtconfig.jwtOptions.secretOrKey);
        res.json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to authenticate user' });
    }
};

module.exports = {
    register,
    login
}