// test questions:
// https://docs.google.com/document/d/1iPOtuSqHlC0bUAOtAGb5VPA_KyyHbVYBX_F4j2T6Y0U/edit?tab=t.0#heading=h.f8v06ydpm3io

// 1. Create variables to store your name, age, and city. Print them to the console.
var name="RadhaKrishna"
var age=50;
var city="Vrindhavan"
console.log(name);
console.log(age);
console.log(city);

// 3. Write a program to check whether a number is positive, negative, or zero.
let num=5;
if(num>0){
    console.log("Positive number")
}else if(num<0){
    console.log("Negative Number")
}else{
    console.log("Zero")
}

// 4. Write a program to find the largest of three numbers.
let a=3,b=4,c=5;
if((a>b) && (a>c)){
    console.log("a is largest one")
}else if((b>a) && (b>c)){
    console.log("b is largest one")
}else{
    console.log("c is the largest one")
}

// 5. Print numbers from 1 to 50 using a loop.
for(i=0;i<=50;i++){
    console.log(i)
}

// 7. Print the multiplication table of a given number.
let n=5;
for(i=1;i<=10;i++){
    console.log(`${n}*${i}=${n*i}`);
}

// 8. Write a function to calculate the square of a number.
function square(n){
    return n*n;
}
console.log(square(4));

// 9. Write a function that accepts a name and prints:
// Welcome <name>
function func(name){
    console.log("Welcome",name);
}
func("anu")
// or
let name1="anu";
console.log(`welcome ${name1}`)
// or
let name2="anu";
console.log("welcome",`${name2}`)

// 10. Write a function that returns the sum of two numbers.
function add(a,b){
    let total=a+b;
    return total;
}
console.log(add(5,6));

// 11. Create a callback function to display:
// Data Processed Successfully

// after another function completes execution.

// mostly prefered answer:
function call2(callback){
    console.log("processing....")
    callback();
}
call2(()=>{
    console.log("Data Processed Successfully")
})

// 13. Create three nested callbacks and explain why this is called Callback Hell.
function fun1(callback){
    console.log("callback1")
    callback()
}
function fun2(callback){
    console.log("callback2")
    callback()
}
function fun3(callback){
    console.log("callback3")
    callback()
}
fun1(()=>{
    fun2(()=>{
        fun3(()=>{
            console.log("three nested callback");
        })
    })
})
// Why Callback Hell?
// Too many nested callbacks.
// Difficult to read and maintain.
// Creates a pyramid-shaped code structure.

// 14. Create a Promise that resolves after 3 seconds with:
// Login Successful


console.log("\n------")
let p=new Promise((resolve,rejectt)=>{
    setTimeout(()=>{
        console.log("Login Successfull")
        resolve(true)
    },2000)
})
p.then((res)=>{
    console.log(res)
});


// 14. Create a Promise that resolves after 3 seconds with:
// Login Successful

// 15. Create a Promise that rejects with:
// Invalid Credentials
function login(user,password){
    return new Promise((resolve,reject)=>{
        if(user==="Radha" && password==="Krishna"){
            setTimeout(()=>{
                console.log("Successfully login");
                resolve(true);
            },3000)
        }else{
            setTimeout(()=>{
                console.log("try again");
                reject(false);
            },3000)
        }
    })
}
login("Radha","Krishna").then((res)=>{
    console.log(res)
})
login("Radha","Krishn").catch((res)=>{
    console.log(res);
})

// 16. Use .then() and .catch() to handle the Promise.
// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         if(a>b){
//             resolve("a is bigger one");                  16.error
//         }else{
//             reject("b is bigger one");
//         }
//     });
// }
// add(3,4).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// 17. Create a Promise chain:
// Step 1 Completed
// Step 2 Completed
// Step 3 Completed

let p1=new Promise((resolve) =>{
    resolve("Step 1 Completed")
})
p1.then((res)=>{
    console.log(res)
    console.log("Step 2 Completed")
}).then(()=>{
    console.log("Step 3 Completed")
})


console.log("Start");

setTimeout(() => {
    console.log("Middle");
}, 0);

console.log("End");

// 20. Print current time every second
// setInterval(() => {
//     let time = new Date();
//     console.log(time.toLocaleTimeString());
// },1000);

function call4(callback){
    setTimeout(()=>{
        callback()
    },2000)
}
call4(()=>{
    console.log("Executed")
})


// 23. Promise Chain: Login → Profile → Dashboard
function login(){
    return Promise.resolve("User Login");
}

function profile(){
    return Promise.resolve("Fetch Profile");
}

function dashboard(){
    return Promise.resolve("Fetch Dashboard Data");
}

login()
.then((msg) => {
    console.log(msg);
    return profile();
})
.then((msg) => {
    console.log(msg);
    return dashboard();
})
.then((msg) => {
    console.log(msg);
});

// 25. Mini Project: Login Simulation
function login(){
    return new Promise((resolve) => {
        console.log("Logging In...");
        
        setTimeout(() => {
            resolve("Login Successful");
        },2000);
    });
}

function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetching User Data");
        },2000);
    });
}

function loadDashboard(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dashboard Loaded");
        },2000);
    });
}

login()
.then((msg) => {
    console.log(msg);
    return fetchUserData();
})
.then((msg) => {
    console.log(msg);
    return loadDashboard();
})
.then((msg) => {
    console.log(msg);
})
.catch((error) => {
    console.log(error);
});

