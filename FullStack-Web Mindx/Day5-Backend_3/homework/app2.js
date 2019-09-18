const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/web28');

var catModel = mongoose.model('Cat',{
    name : String,
    age: Number
});

// var newKitty = new catModel({
//     name: "dasan",
//     age: 1
// });
// newKitty.save(function(err,data){
//     if(err){
//         console.log(err);
//     }
// })

for(var i=1;i<=10;i++){
    var newKitty = new catModel({
        name:`something${i}`,
        age:i+1
    });
    newKitty.save(function(err, data){
        if(err) {
            console.log(err);
        }
    })
}

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



// catModel.find({}).limit(3).exec(function(err,data){
//     if(err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });


// day8:poppulate