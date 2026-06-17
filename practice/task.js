// TASK:-https://docs.google.com/document/d/173L2nfHPui9kNnCnKvalROp4DnAEaiB4hil7HIdbMh0/edit?usp=sharing

// 1. What will be the output of the following code and why? 
var x;
x = 5;
var x = 10;
console.log(x);

//2
console.log(y);
var y = 15; //undefined
//4
var b;
console.log(b); //undefined
//5
var a = 1;
{
    var a = 2;
}
console.log(a);
//6
{
    var c = 10;
}
console.log(c);
//7
var p;
console.log(p);
p = 20;
//8
var q = 5;
var q = 10;
console.log(q);
//9
var r;
r = 30;
var r = 50;
console.log(r);
//10
console.log(x1);
var x1 = 25;
//11
console.log(a1);
var a1 = 40;
//12
var t = 10;
var t;
console.log(t);
//13
x = 100;
var x;
console.log(x);
//15
var z1 = 1;
z1 = 2;
console.log(z1);
//16
var _Xyz12$;
_Xyz12$ = 45;
console.log(_Xyz12$);
//17
var $num_Val = 8;
$num_Val = 16;
console.log($num_Val);
//18
console.log(_x_Val12);
var _x_Val12 = 27;
//19
var Val_12X$ = 10;
Val_12X$ = 20;
console.log(Val_12X$);
//20
console.log(VAL_num);
var VAL_num = "Test";
//21
var $count = 5;
$count = $count + 3;
console.log($count);
//24
var $$$ = 99;
$$$ = 88;
console.log($$$);
//25
var _vA_rX = "Code";
console.log(_vA_rX);
//26
var X_$12;
console.log(X_$12);
X_$12 = 123;
//27
var __X_var$ = "Hello";
var __X_var$ = "World";
console.log(__X_var$);


console.log("------")


//  TASK:-https://docs.google.com/document/d/11PPTSLDpJmeaOKDhJZeWdZTQMS6tLHyHjgKe04xax3U/edit?tab=t.0
1
function greet() {
    console.log("Hello!");
}
greet();

//2
let showMessage = () => {
    console.log("This is a message!");
}
showMessage();

//3
let LogInfo = () => {
    console.log("Logging Information");
}
LogInfo();

//4
function startGame() {
    console.log("Game Started");
    endGame();
}
function endGame() {
    console.log("Game Over");
}
startGame();

//5
function beginTask() {
    console.log("Task Started");
    finishTask();
}
function finishTask() {
    console.log("Task Finished");
}
beginTask();
console.log("------");

// TASK:https://docs.google.com/document/d/1BTI5YUvlw6MMJi2PZNfSxTcg9ii1Baz0If-CtFSWjIU/edit?tab=t.0
//1
function add(a,b){
let total=a+b;
return total;
}
console.log(add(10,20));

//2
function string(name){
name=name.toUpperCase();
console.log(name);
}
string("anu");

// 3
function func(name){
    console.log(name);
}
func(undefined);

//4
function func(arr){
if(arr && arr.length == 0){
console.log("empty");
}
}
func([]);

//5
function sub(a,b){
let ans=a-b;
return ans;
}
console.log(sub(10,20));

//6
function NameAge(name,age){
    return `Hello,${name}! You are ${age} years old.`;
}
console.log(NameAge("anu", 24));

//7
function even(a){
if(a%2==0){
console.log("even");
}else{
console.log("odd");
}
}
even(13);