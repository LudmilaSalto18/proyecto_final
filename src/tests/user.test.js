const request = require('supertest')
const app = require('../app')

let userId;
let token;
test('POST/users should create user', async () => {
    const newUser = {
        firstName: 'Ludmila',
        lastName: 'Salto',
        email: 'ludmilasalto5@gmail.com',
        password: 'ludmila1234',
        phone: '2254614753'
    }
    const res = await request(app).post('/users').send(newUser)
    userId = res.body.id
    expect(res.status).toBe(201)
    expect(res.body.firstName).toBe(newUser.firstName)
})

test('/POST/users/login should do login', async () =>{
    const user = {
        email: 'ludmilasalto5@gmail.com',
        password: 'ludmila1234'
    }
    const res = await request(app)
        .post('/users/login')
        .send(user)
    token = res.body.token;
    expect(res.status).toBe(200)
    expect(res.body.user.email).toBe(user.email)
    expect(res.body.token).toBeDefined();
})

test('POST/users/login with invalid credentials should retunr 401', async () => {
    const user = {
        email: 'ludmilasalto5@gmail.com',
        password: 'wronpassowrd'
    }
    const res = await request(app)
        .post(`/users/login`)
        .send(user)
    expect(res.status).toBe(404)
})
test('GET/users should return all user', async () => {
    const res = await request(app)
        .get('/users')
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(2)
})

test('PUT/users/:id should update one user', async () => {
    const updateUser = {
        firstName: 'Ludmila update'
    }
    const res = await request(app)
        .put(`/users/${userId}`)
        .send(updateUser)
        .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(200)
    expect(res.body.firstName).toBe(updateUser.firstName)
} )

test('DELETE/users/:id should delte one user', async () => {
    const res = await request(app)
    .delete(`/users/${userId}`)
    .set('Authorization', `Bearer ${token}`)
    expect(res.status).toBe(204)
})