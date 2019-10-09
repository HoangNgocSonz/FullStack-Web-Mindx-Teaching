const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    category: String,
    description:String,
    author:String,
});

const BookModel = mongoose.model('Book',BookSchema);

// const find = async function(query){
//     return await BookModel.find(query);
// }
const find = async function (query) {
    const limit = Number(query.limit);
    const skip = Number(query.skip);
    delete query.skip;
    delete query.limit;
    if ( limit && skip !== undefined ) {
      return await BookModel.find(query).limit(limit).skip(skip).populate("books");
    } else {
      return await BookModel.find(query).populate("books");
    }
  }
  
const count = async function (query) {
    return await BookModel.count(query);
}

const findById = async function(id){
    return await BookModel.findById(id);
}

const create = async function(data){
    const a = new BookModel(data);
    return await a.save();
}

const update = async function(id,data){
    return await BookModel.findByIdAndUpdate(id,{$set:data},{new:true});
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
    count: count,
}