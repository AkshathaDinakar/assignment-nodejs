const { Sequelize } = require('sequelize');

const {DB_NAME,DB_USER,DB_PASSWORD,DB_PORT,DB_HOST} = process.env;

const sequalize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);

const user = require('./user')(sequalize,Sequelize);
const product = require('./product')(sequalize,Sequelize);
product.belongsTo(user,{foreignKey: 'createdBy'})
user.hasMany(product,{foreignKey: 'createdBy'})


sequalize.authenticate()
.then(()=>console.log('DB is connected'))
.catch(err=>console.log('the error',err))
sequalize.sync({ force: false })
.then(()=> {
    console.log('database is created')
})
module.exports = {
    user,
    product
}

