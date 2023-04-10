const { verify } = require('jsonwebtoken');
const { getAll, create, getOne, remove, update } = require('../controllers/category.controller');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const categoryRouter = express.Router();

categoryRouter.route('/')
    .get(getAll)
    .post(verify,create);

categoryRouter.route('/:id')
    .get(getOne)
    .delete(verifyJWT,remove)
    .put(update);

module.exports = categoryRouter;