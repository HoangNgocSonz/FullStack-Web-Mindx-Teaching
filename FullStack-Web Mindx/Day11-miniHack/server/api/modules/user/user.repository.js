const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    score: String,
});

const UserModel = mongoose.model('Userr',UserSchema);

const find = async function(query){
    return await UserModel.find(query);
}

const findById = async function(id){
    return await UserModel.findById(id);
}

const create = async function(data){
    const b = new UserModel(data);
    return await b.save();
}

const update = async function(id,data){
    return await UserModel.findByIdAndUpdate(id,{$set:data},{new:true});
}
const  deleteOne = async function(id){
    return await UserModel.findByIdAndDelete(id);
}

module.exports = {
    find:find,
    findById:findById,
    create:create,
    update:update,
    delete:deleteOne,
}