const {user}  = require('../models/index');
const jwt = require('jsonwebtoken');
const {TOKEN_SECRET} = process.env;

_loginUser = async(req)=>{
     const userInfo = await user.findOne({
        where : {email : req.email}
     })

     if(user){
        let payload = {
            id : userInfo.id,
            email : userInfo.email
        }
        let token = jwt.sign(payload,TOKEN_SECRET);
         return { user : {...userInfo},token}
     }else{
        throw 'User doesnot exist';
     }
}

module.exports = {
    _loginUser
}