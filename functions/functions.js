// 1. declarative function / named function:-
function even(num){
    if(num%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
even(2);

// access the top of the scope
even1(10)
function even1(n){
    for(i=0;i<=n;i++){
        if(i%2==0){
            console.log("even ",i);
        }else{
            console.log("odd ",i);
        }
    }
}
console.log("\n--------");


// 2. function expression / anonymous function:-
let exp1=function(num){
    if(num%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
exp1(2); //even

let exp2=function(){
    console.log("Welcome");
}
exp2();
console.log("\n--------");


// 3. arrow function /advance function:-
let arrow= ()=>{
    console.log("Hello");
}
arrow();

// single line function
let single1= ()=> console.log("Heloo"); //1
single1()

let single2= (a,b)=>(a+b)
console.log(single2(10,20))

let single3= (a)=>(a)
console.log(single3('hello'))

let single4= a=>{
    return a;
}
console.log(single4("number")); //only this line without return undefined, but with return number

// lexical function:-
function lexical(){
    let str="Rama";
    return function lexical1(){
        console.log(str);
    }
}
lexical()()


