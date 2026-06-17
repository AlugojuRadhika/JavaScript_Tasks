// let add=new Promise(function(resolve,reject){
//     resolve(20);
// })
// add.then((res)=>{ //1
//     // console.log(res+1)
// })

// //or 4 to 6 or 8 to 12 any way you want

// add.then((res)=>{ //2
//     return res+10
// }).then((res)=>{
//     return res+1
// }).then((res)=>{
//     return res*20
// }).then((res)=>{
//     console.log(res)
// })

// function fetchdata(){ //3
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('data received')
//         },1000)
//     })
// }
// fetchdata().then((ans)=>{
//     console.log(ans)
// })



console.log("\n---------")
// ecommerce product delivery process: (using promises)

function login(user,password){ //4
    return new Promise((resolve,reject)=>{
    if(user==="Ram" && password==="Sitha"){
        console.log("Checking username and password.....")
        setTimeout(function(){
            console.log("Successfully login!!!");
            resolve("Success")
        },2000)
    }else{
        console.log("Checking username and password.....")
        setTimeout(function(){
            console.log("Try Again!");
            reject("Error")
        },1000)
    }    
        })
        
}
function addtocart(status){ //5
    return new Promise((resolve,reject)=>{
    if(status){
        console.log("Item is adding.....")
        setTimeout(function(){
            console.log("Item added to cart!!!");
            resolve("Added")
        },1000)
    }else{
        console.log("Item is adding.....")
        setTimeout(function(){
            console.log("Item not added to cart!");
            reject("Not added")
        },1000)
    }
})
}
function payment(status){ //6
    return new Promise((resolve,reject)=>{
    if(status){
        console.log("Payment is processing.....")
        setTimeout(function(){
            console.log("Payment done Successfully!!!");
            resolve("Processed")
        },1000)
    }else{
        console.log("Payment is processing.....")
        setTimeout(function(){
            console.log("Payment is pending!");
            reject("Not Processed")
        },1000)
    }
})
}
function shipping(status){ //7
    return new Promise((resolve,reject)=>{
    if(status){
        console.log("Shipping details.....")
        setTimeout(function(){
            console.log("your item is ready for shipping!!!");
            resolve("Shipped")
        },1000)
    }else{
        console.log("Shipping details.....")
        setTimeout(function(){
            console.log("Shipping is pending!");
            reject("Not Shipped")
        },1000)
    }
})
}
function delivery(status){ //8
    return new Promise((resolve,reject)=>{
    if(status){
        console.log("delivery details.....")
        setTimeout(function(){
            console.log("your item is delivered successfully!!!");
        },1000)
    }else{
        console.log("delivery details.....")
        setTimeout(function(){
            console.log("delivery is pending!");
        },1000)
    }
})
}
// nested promises:
// login("Ram","Sitha").then((res)=>{
//     console.log(res)
//     addtocart(res).then((res)=>{
//     console.log(res)
// })
// });

login("Ram","Sitha").then((res)=>{ //4
    return addtocart(res)
})
.then((res)=>{ //5
    return payment(res)
})
.then((res)=>{ //6
    return shipping(res)
})
.then((res)=>{ //7
    return delivery(res)
})
.then((res)=>{ //8
    console.log(res)
})


// callback_hell get confusion:-

// login("Ram","Sitha",function(status){
//     addtocart(status,function(status){
//         payment(status,function(status){
//             shipping(status,function(status){
//                 delivery(status,function(status){
//                     console.log("Thank you for your shopping");
//                 })
//             })
//         })
//     })
// })