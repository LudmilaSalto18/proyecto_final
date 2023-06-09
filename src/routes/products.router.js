const { getAll, create, getOne, remove, update, setProductImages } = require('../controllers/product.controller');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const productRouter = express.Router();

productRouter.route('/')
    .get(getAll)
    .post(verifyJWT,create);
productRouter.route('/:id/images')
    .post(setProductImages)
productRouter.route('/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = productRouter;