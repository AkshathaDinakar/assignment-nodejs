const {  _getAllUsers,
    _createNewuser,
    _updateUserById,
    _deletuserById } = require('../services/user.service');


getAllUsers = (req,res,next)=>{

    _getAllUsers(req.body)
    .then((users)=>{
        res.json({
            data : users,
            status : 'ok',
            message : 'Users fetched Successfully'
         }

         )
    })
    .catch(err=> next(err))
   
}

createNewUser = (req,res,next)=>{
    _createNewuser(req.body)
    .then((user)=>{
        res.json({
            data : user,
            status : 'ok',
            message : 'Created Successfully'
        })
    })
    .catch(err=>next(err))
  
}

updateUserById = (req,res,next)=>{
    _updateUserById(req)
    .then((user)=>{
        res.json({
            data : user,
            status : 'ok',
            message : 'Updated Successfully'
        })
        
    })
    .catch(err=>next(err));
}

deletUser = (req,res,next)=>{
    _deletuserById(req.params)
    .then((user)=>{
        res.json({
            status : 'ok',
            message : 'user deleted successfully'
        })

    })
    .catch(err=>next(err));
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUserById,
    deletUser
}

