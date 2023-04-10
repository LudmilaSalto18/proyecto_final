const express = require('express');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const productRouter = require('./products.router');
const produtImgRouter = require('./productImg.router');
const carRouter = require('./cart.router');
const purchaseRouter = require('./purchase.router');
const router = express.Router();

// colocar las rutas aquí

router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/products', productRouter)
router.use('/product_images', produtImgRouter)
router.use('/cart', carRouter)
router.use('/purchases', purchaseRouter)
module.exports = router;