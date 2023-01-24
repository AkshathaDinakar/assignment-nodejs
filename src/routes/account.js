const {loginUser} = require('../controllers/account');

let Router = require('express');

let router = Router();

router.post('/login',loginUser);

module.exports = router;

