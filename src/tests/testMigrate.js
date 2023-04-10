const User = require('../models/User');
const sequelize = require('../utils/connection');
require('../models/User')
require('../models/Category')
require('../models/Product')
const main = async() => {
    try{
        await sequelize.sync({ force: true });
        await User.create({
            firstName: 'Test',
            lastName: 'Users',
            email: 'test@gmail.com',
            password: 'test1234',
            phone: '104875'
        })
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();