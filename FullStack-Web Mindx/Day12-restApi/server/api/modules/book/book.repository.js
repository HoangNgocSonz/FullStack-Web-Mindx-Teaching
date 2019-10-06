const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    category: String,
    description:String,
    author:String,
});

const BookModel = mongoose.model('Book',BookSchema);

const find = async function(query){
    return await BookSchema.find(query);
}

const findById = async function(id){
    return await BookSchema.findById(id);
}

const create = async function(data){
    const a = new BookModel(data);
    return await a.save();
}

const update = async function(id,data){
    return await BookModel.findByIdAndUpdate(id,{$set:data});
}
const  deleteOne = async function(id){
    return await BookModel.findByIdAndDelete(id);
}

module.exports = {
    find:find,
    findById:findById,
    create:create,
    update:update,
    delete:deleteOne,
}