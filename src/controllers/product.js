const {
    _getAllproducts,
    _getAllProductsById,
    _createProduct,
    _updateProductById,
    __deleteProductById,
    _deletAllProduct,
    _getPublishedProducts,
    _getAllProductsByUserId,
    _updateProductByUserId
} = require('../services/product.service');


getAllProducts = (req,res,next) =>{
    _getAllproducts(req)
    .then((product)=>{
       res.json({
        data : product,
        status : 'ok',
        message : 'products Fetched successfully'
       })
    })
    .catch(err=>next(err))
}

getAllProductById = (req,res,next) =>{
    _getAllProductsById(req.params)
    .then((product)=>{
       res.json({
        data : product,
        status : 'ok',
        message : 'product Fetched successfully'
       })
    })
    .catch(err=>next(err))
}

createProduct = (req,res,next) =>{
    _createProduct(req.body)
    .then((product)=>{
       res.json({
        data : product,
        status : 'ok',
        message : 'Product Created successfully'
       })
    })
    .catch(err=>next(err))
}
updateProductById = (req,res,next) =>{
    _updateProductById(req)
    .then((product)=>{
       res.json({
        data : product,
        status : 'ok',
        message : 'product Updated successfully'
       })
    })
    .catch(err=>next(err))
}

deleteProductById = (req,res,next) =>{
    __deleteProductById(req.params)
    .then((product)=>{
       res.json({
        data : product,
        status : 'ok',
        message : 'Product Deleted successfully'
       })
    })
    .catch(err=>next(err))
}

deletAllProducts = (req,res,next) =>{
    _deletAllProduct(req.body)
    .then((product)=>{
       res.json({
        data : product,
        status : 'ok',
        message : 'products Deleted successfully'
       })
    })
    .catch(err=>next(err))
}

getPublishedProducts = (req,res,next) =>{
    _getPublishedProducts(req.body)
    .then((product)=>{
       res.json({
        data : product,
        status : 'ok',
        message : 'Published products Fetched successfully'
       })
    })
    .catch(err=>next(err))
}

getAllProductsByUserId = (req,res,next) =>{
    _getAllProductsByUserId(req.params)
    .then((product)=>{
       res.json({
        data : product,
        status : 'ok',
        message : 'products Fetched successfully'
       })
    })
    .catch(err=>next(err))
}

updateProductsByUserId = (req,res,next) =>{
    _updateProductByUserId(req)
    .then((product)=>{
       res.json({
        data : product,
        status : 'ok',
        message : 'products Updated successfully'
       })
    })
    .catch(err=>next(err))
}

module.exports = {
    getAllProducts,
    getAllProductById,
    createProduct,
    updateProductById,
    deleteProductById,
    deletAllProducts,
    getPublishedProducts,
    getAllProductsByUserId,
    updateProductsByUserId
}