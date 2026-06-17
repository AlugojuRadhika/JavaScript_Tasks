// let p1=new Promise(function(resolve,reject){
//     if(true){
//         resolve("Yes"); //.then
//     }else{
//         reject("No"); //.catch
//     }
// })
// console.log(p1); //1
// p1.then((result) =>{ //2 yes
//     console.log(result)
// })  .catch((error)=>{
//         console.log(error)
//     });
// p1.finally(()=>console.log("message")) //3 message

// p1.then(function func(result){ //using declaration function //4
//     console.log(result)
// })

// let f=function(result){ //using function expression //5
//     console.log(result)
// }
// p1.catch(f)

// p1.catch(function(result){ //using function expression //6
//     console.log(result);
// })

// p1.then((function(result){ //error not work this IIFE in promises
//     console.log(result)
// })());

// //------------------------
// //Task
// let p=new Promise((resolve,reject)=>{
// // resolve(true);
// })
// console.log(p);

//     let pro=new Promise((resolv,rejec)=>{
//         setTimeout(()=>{
//         resolv("Data Loaded");
//     },2000)
// });
// pro.then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })



// if promise one excute then only promise 2 gets excutes:-
function X(){
    console.log("promise-1..")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise-1 success")
        },1500);
    })
}
function Y(){
    console.log("promise-2..")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise-2 success")
        },2000);
    })
}
function Z(){
    console.log("promise-3..")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise-3 success")
        },1000);
    })
}
// X().then((res)=>console.log(res));
// Y().then((res)=>console.log(res));
// Z().then((res)=>console.log(res));
X().then((res)=>{
    console.log(res);
    return Y(res);
}).then((ans)=>{
    console.log(ans)
    return Z(ans);
}).then((a)=>{
    console.log(a)
})


