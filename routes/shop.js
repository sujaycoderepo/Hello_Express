const path = require('path');

const express = require('express');

const rootPath = require('../util/path');

const router = express.Router();

const adminRoute = require('./admin');

router.use('/catelog',(req, res, next) =>{
    console.log("This is catelog !!!");
    //res.sendFile(path.join(rootPath,'views','catelog.html'));
    const products = adminRoute.products;
    console.log("Product list" + products);
    res.render('catelog',{prods:products, doctTitle:"Shopping Catalog", pageName:'catelog'});
});

module.exports = router;
