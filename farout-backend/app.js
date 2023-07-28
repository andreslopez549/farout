const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const attributesRoutes = require('./routes/attributes');
const brandRoutes = require('./routes/brand');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const strategy = require('./config/jwt');
const checkauth = require('./middleware/checkauth')

const app = express();

app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use('/images', express.static(path.join(__dirname, '/uploads/images')));

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

passport.use("strategy", strategy);

app.use('/auth', authRoutes);
app.use('/product',  productRoutes);
app.use('/category',  categoryRoutes);
app.use('/brand',  brandRoutes);
app.use('/attribute',  attributesRoutes);


module.exports = app;

