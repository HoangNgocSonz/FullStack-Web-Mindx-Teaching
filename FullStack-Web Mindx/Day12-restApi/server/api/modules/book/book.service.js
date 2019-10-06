const repository = require('./book.repository');
const find = async function(query){
    return await repository.find(query);
}

const findById = async function(id){
    return await repository.findById(id);
}

const create = async function(data){
    if(!data || !data.title || !data.author){
        throw new error("missing input");
    }
    return await repository.create(data);
}

const update = async function(id,data){
    const existed = await repository.findById(id);
    if(!existed){
        throw new Error("entity not found");
    }
    return await repository.update(id,data);
}

const deleteOne = async function(id){
    const existed = await repository.findById(id);
    if(!existed){
        throw new Error("entity not found");
    }
    return await repository.delete(id);
}
module.exports = {
    find:find,
    findById:findById,
    create:create,
    update:update,
    delete:deleteOne,
}

