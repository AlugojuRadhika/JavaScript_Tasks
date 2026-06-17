// Add, Sub, Mul, Divide:-

function add(value,callback){
    let totaladd=value+20;
    // console.log(totaladd); //1
    callback(totaladd);
}
function sub(value,callback){
    let subtotal=value-10;
    // console.log(subtotal); //2
    callback(subtotal)
}
function mul(value,callback){
    let multotal=value*10;
    callback(multotal);
    // console.log(multotal); //3
}
function div(value,callback){ //4
    let divtotal=value/10;
    callback(divtotal);
}
add(10,function(t_add){
    console.log(t_add); //1
    sub(t_add,function(t_sub){
        console.log(t_sub); //2
        mul(t_sub,function(t_mul){
            console.log(t_mul); //3
            div(t_mul,function(t_div){
                console.log(t_div); //4
            })
        })
    });
});


// ecommerce product delivery process:-

function login(user,password,callback){
    if(user==="Ram" && password==="Sitha"){
        setTimeout(function(){
            console.log("Successfully login!!!");
            callback(true);
        },1000)
    }else{
        setTimeout(function(){
            console.log("Try Again!");
            callback(false);
        },1000)
    }
}
function addtocart(status,callback){
    if(status){
        setTimeout(function(){
            console.log("Item added to cart!!!");
            callback(true);
        },1000)
    }else{
        setTimeout(function(){
            console.log("Item not added to cart!");
            callback(false);
        },1000)
    }
}
function payment(status,callback){
    if(status){
        setTimeout(function(){
            console.log("Payment done Successfully!!!");
            callback(true);
        },1000)
    }else{
        setTimeout(function(){
            console.log("Payment is pending!");
            callback(false);
        },1000)
    }
}
function shipping(status,callback){
    if(status){
        setTimeout(function(){
            console.log("your item is ready for shipping!!!");
            callback(true)
        },1000)
    }else{
        setTimeout(function(){
            console.log("Shipping is pending!");
            callback(false)
        },1000)
    }
}
function delivery(status,callback){
    if(status){
        setTimeout(function(){
            console.log("your item is delivered successfully!!!");
            callback()
        },1000)
    }else{
        setTimeout(function(){
            console.log("delivery is pending!");
            callback()
        },1000)
    }
}
login("Ram","Sitha",function(status){
    addtocart(status,function(status){
        payment(status,function(status){
            shipping(status,function(status){
                delivery(status,function(status){
                    console.log("Thank you for your shopping");
                })
            })
        })
    })
})