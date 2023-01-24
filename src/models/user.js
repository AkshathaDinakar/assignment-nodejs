const Sequelize = require('sequelize');

module.exports = (sequalize,Datatypes)=>{
   return sequalize.define('user',{
       id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        full_name : {
            type : Sequelize.STRING,
            allowNull : false,
             require : true
        },
        last_name : {
            type : Sequelize.STRING,
            },
        email : {
            type : Sequelize.STRING,
            allowNull : false,
            require : true,
            unique : true
        },
        phone : {
            type : Sequelize.STRING,
            allowNull : false,
            require : true,
            unique : true
        },
        address : {
            type : Sequelize.STRING,
          },
        pincode : {
            type : Sequelize.STRING,
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false,
            require : true,
        },
        is_delete : {
             type : Sequelize.BOOLEAN,
             defaultValue : false,
             allowNull : false
        }

    },{ timestamps: true });
};