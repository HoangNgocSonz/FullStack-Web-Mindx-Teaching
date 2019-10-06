let newPromise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve( "p1");
    },3000);
});

let newPromise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve( "p2");
    },3000);
});

let newPromise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve( "p3");
    },3000);
});

async function getResult(){
    let result1 = await newPromise1;
    // let result2 = await newPromise1;
    // let result3 = await newPromise1;
    //console.log(result1,result2,result3);
    console.log(result1);
    console.log("p2");
}

getResult();






// promises.all([promise1,promise2,promise3].then())
// newPromise.then(function(data){
//     console.log(data);
// })
