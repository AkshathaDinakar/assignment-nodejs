
const  Sequelize  = require('sequelize');
const {product} = require('../models');
const {user} =  require('./../models/index')
const Op = Sequelize.Op

_getAllproducts = async(req)=>{
    let products;
    console.log('the query params',req);
    let {page,pageSize,name} = req.query;
    page = page ? page : 1;
    pageSize = pageSize ? pageSize : 100;
    if(page || pageSize || name){
        products =  await product.findAndCountAll({
            where : (req.query && name) ? {
                [Op.or] :[
                    {
                    name : Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + name.toLowerCase() + '%'),
                   }
                ]
            } : {},
           order : ['id'],
           limit : pageSize ? pageSize  : 100,
           offset : parseInt((page - 1) * pageSize, 10)
        })
    }else{
        products = await product.findAll({})
    }
    return products;
}

_getAllProductsById = async(param)=>{
    return await product.findOne({where : {id : param.id}})
}

_createProduct = async(data)=>{
    return await product.create(data)
    // let user = user.findOne({where : {id : data.createdBy}})
    // if(user){
    //     return await product.create(data)
    // }else{
    //     throw "User not found";
    // }
}

_updateProductById = async(req)=>{
    return await product.update(req.body,{where : {id : req.params.id}})
}

__deleteProductById = async(param)=>{
    return await product.destroy({where : {id : param.id}})
}

_deletAllProduct = async()=>{
    return await product.destroy({truncate: true})
}

_getPublishedProducts = async()=>{
    return await product.findAll({where : {published : true},order : ['id']})
}

_getAllProductsByUserId = async(param)=>{
    return await  product.findAll({where : {createdBy : param.id}})
}

_updateProductByUserId = async(req)=>{
   return await product.update(req.body,{where : {id : req.params.id}})
}



module.exports = {
    _getAllproducts,
    _getAllProductsById,
    _createProduct,
    _updateProductById,
    __deleteProductById,
    _deletAllProduct,
    _getPublishedProducts,
    _getAllProductsByUserId,
    _updateProductByUserId
}