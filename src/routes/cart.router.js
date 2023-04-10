const { getAll, create } = require('../controllers/car.category');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const carRouter = express.Router();

carRouter.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create)

module.exports = carRouter;