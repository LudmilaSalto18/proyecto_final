const request = require('supertest')
const app = require('../app');
const ProductImg = require('../models/ProductImg');
let token;
let productId;
require('../models')
beforeAll(async () => {
    const credentials = {
        email: 'test@gmail.com',
        password: 'test1234',
    }
    const res = await request(app).post('/users/login').send(credentials)
    token = res.body.token
})

test('POST/products should create one product', async () => {
    const products = {
        title: "Motorola",
        description: "phone",
        price: 500,
        categoryId:1
    }
    const res = await request(app)
        .post('/products')
        .send(products)
        .set('Authorization', `Bearer ${token}`)
    productId = res.body.id
    console.log(res.body)
    expect(res.status).toBe(201)
    expect(res.body.title).toBe(products.title)
}) 

