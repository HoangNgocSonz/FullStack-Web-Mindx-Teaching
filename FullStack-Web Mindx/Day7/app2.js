const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/web28');

var catModel = mongoose.model('Cat',{
    name : String,
    age: Number
});

// catModel.find().exec(function(err,data){
//     if(err) console.log(err);
//     else{
//         console.log(data);
//     }
// })

// catModel.find({}).exec(function(err,data){
//     if(err) console.log(err);
//     console.log(data);
// })

var newKitty = new catModel({
    name: "sony",
    age: 14
});
console.log(newKitty);
newKitty.save(function(err,data){
    if(err){
        console.log(err);
    }
})


// catModel.find({age: {$lt:3}}).limit(3).skip(2).sort({name: "asc"}).exec(function(err,data){
//     if(err) console.log(err);
//     console.log(data);
// })

// catModel.deleteMany({name:"leg long"}).exec(function(err,data){
//     if(err) console.log(err);//err
//     console.log(data);
// })

// catModel.updateMany({},{$set:{"age":4}}).exec(function(err,data){
//     if(err) console.log(err);
// })




// day8:poppulate