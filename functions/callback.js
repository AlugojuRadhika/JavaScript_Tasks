// 1
function greet(){
    console.log("Greetings....!");
}
function print(callback){
    console.log(callback);
}
print(greet)

// 2
function greet1(){
    console.log("Greetings.....!");
}
function print1(callback){
    callback();
}
print1(greet1)

console.log("\n")

// 3
function one(callback1,callback2){
    console.log("two");
    callback1();
    console.log("three");
    callback2();

}
function two(){
    console.log("two function")
}
function three(){
    console.log("three function");
}
one(two,three)

// 4
// function print(str,callback){
//     callback(str);
// }
// print("rama",function(message){
//     console.log("hello",message);
// })
// // output:-
// // hello rama

//5
function add(a,b,callback){
    let total=a+b;
    callback(total)
}
let total=function(total){
    console.log(total);
}
add(10,30,total);

// 6
