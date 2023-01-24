const Router = require('express');
const{ getAllUsers,
    createNewUser, updateUserById,
    deletUser} = require('../controllers/user');
    const {checkSignedUrl} = require('../common/index')

const router = Router();

router.get('/getAllUsers', checkSignedUrl,getAllUsers);
router.post('/createUser',checkSignedUrl,createNewUser);
router.patch('/updateUser/:id',checkSignedUrl,updateUserById);
router.delete('/deleteUser/:id',checkSignedUrl,deletUser);

module.exports = router