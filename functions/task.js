// 1. Basic Callback Execution
// Write a function called processNumber that accepts a number and a callback function.
// The processNumber function should double the number and pass the result to the callback function.

function processNumber(a,callback){
    let result=a*2;
    callback(result);
    return result;
}
console.log(processNumber(10,()=>{
}))
// or
function processNumber1(a1,callback){
    let result1=a1*2;
    callback(result1);
}
processNumber1(10,(res1)=>{
    console.log(res1);
})


// 2. Callback with Array Iteration
//  Write a function called forEachElement that takes an array and a callback function.
// The function should iterate over the array and execute the callback function for each element,
// passing the element as an argument.

function forEachElement(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}
forEachElement([1,2,3,4,5],(res)=>{
    console.log(res);
})

// 3. Simple Delayed Callback
//  Write a function sayHello that accepts a name and a callback function.
// Use setTimeout to wait for 1 second and then call the callback function,
// passing the message "Hello, [name]!" (replace [name] with the provided name).

function sayHello(name,callback){
    setTimeout(function(){
        callback(`Hello ${name}!`);
    },1000)
    
}
sayHello("Radha",(res)=>{
    console.log(res);
})

// 4. Callback on Condition
//  Write a function checkEven that accepts a number and two callback functions.
// If the number is even, call the first callback with the number.
// If the number is odd, call the second callback with the number.

function checkEven(n,callback1,callback2){
if(n%2==0){
    callback1(n);
}else{
    callback2(n);
}
}
checkEven(4,(res)=>{
    console.log(res,"even");
},(res)=>{
    console.log(res,"odd");
})



// 5. Sequential Callbacks
//  Write a function performTasks that accepts a number and two callback functions.
// First, add 5 to the number using the first callback, and 
// then multiply the result by 2 using the second callback.
// Log the final result to the console.

function performTasks(a,callback1,callback2){
    let res=callback1(a);
console.log(callback2(res))
}
function c1(a){
    let add=a+5;
    return add;

}
function c2(add){
    let mult=add*2;
    return mult;
}
performTasks(5,c1,c2);

