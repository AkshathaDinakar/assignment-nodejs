const {user} =  require('../models');

_getAllUsers = async()=>{
    return await user.findAll( {where : {is_delete : false}})
}

_createNewuser = async(data)=>{
    return await user.create(data)
}

_updateUserById = async(req)=>{
    return await user.update(req.body,{where : {id : req.params.id}});
}

_deletuserById = async(params)=>{
    return await user.update({is_delete:true},{where : {id : params.id}})
}

module.exports = {
    _getAllUsers,
    _createNewuser,
    _updateUserById,
    _deletuserById
}



