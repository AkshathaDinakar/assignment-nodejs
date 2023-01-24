const Router = require('express');
const {checkSignedUrl} = require('../common/index')

const {
    getAllProducts,
    getAllProductById,
    createProduct,
    updateProductById,
    deleteProductById,
    deletAllProducts,
    getPublishedProducts,
    getAllProductsByUserId,
    updateProductsByUserId
} = require('../controllers/product');
const router = Router();


router.get('/getAllProducts',checkSignedUrl,getAllProducts);
router.get('/getAllProducts/:id',checkSignedUrl,getAllProductById)
router.post('/createProducts',checkSignedUrl,createProduct)
router.patch('/updateProductById/:id',checkSignedUrl,updateProductById)
router.delete('/deleteProductById/:id',checkSignedUrl,deleteProductById)
router.delete('/deleteProducts',checkSignedUrl,deletAllProducts)
router.get('/getPublishedProducts',checkSignedUrl,getPublishedProducts)
router.get('/getProductsByUserId/:id',checkSignedUrl,getAllProductsByUserId)
router.patch('/updateProductsByUserId/:id',checkSignedUrl,updateProductsByUserId)

module.exports = router;


