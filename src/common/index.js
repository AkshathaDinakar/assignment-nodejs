const jwt = require('jsonwebtoken');


checkSignedUrl = (req,res,next)=>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];
        const user = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = user;
        req.token = token
        next();
    }else{
        res.status(400).json({
            status : 'bad',
            message : 'Authorization required'
        })
    }
}

module.exports = {
    checkSignedUrl
}