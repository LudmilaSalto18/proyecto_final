const { getAll, create,  remove } = require('../controllers/productImg.controller');
const express = require('express');
const upload = require('../utils/multer');
const verifyJWT = require('../utils/verifyJWT');

const produtImgRouter = express.Router();

produtImgRouter.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,upload.array('image'),create);

produtImgRouter.route('/:id')
    .delete(verifyJWT,remove)
    
module.exports = produtImgRouter;