const Sequelize  = require('sequelize');
const {user} = require('./index');

module.exports = (sequelize,Datatype)=>{

return sequelize.define('product',{

    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type :  Sequelize.STRING,
        allowNull : false,
        require : true
    },
    description : {
        type : Sequelize.STRING
    },

    published : {
        type : Sequelize.BOOLEAN,
        defaultValue : false
    },
    createdBy : {
        type : Sequelize.INTEGER,
        references: user,
        referencesKey: 'id'
    }
},{ timestamps: true })
};
