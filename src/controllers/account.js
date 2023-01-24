const {_loginUser} = require('../services/account.service');

loginUser = (req,res,next)=>{
    _loginUser(req.body)
    .then((user)=>{
         res.json({
            data : user,
            status : 'ok',
            message : 'User login successfully'
         })
    })
    .catch (err => next(err))
    }

    module.exports = {
        loginUser
    }
