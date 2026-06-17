// TASK:-Arrow Function
// https://docs.google.com/document/d/1gkCsxhuo7IlUvCOC28veVPAI23v-fqKVGtyN9tFpl_g/edit?tab=t.0

// 1. Write an arrow function that takes two parameters, a and b, and returns their sum.
let sum=(a,b)=>{
    return a+b;
}
console.log(sum(10,20));

// 2. Create an arrow function that takes a single parameter name and 
// returns a greeting message: “Hello, {name}!”
let name=(str)=>{
    return`Hello,${str}!`;
}
console.log(name("Radha"));

// 3. Write an arrow function that checks if a number is even and 
// returns true if it is, or false otherwise.
let even=(n)=>{
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(even(12)?"Even":"Odd");

//4. Write an arrow function that accepts a number and 
// returns true if the number is greater than 10, or false otherwise.
let greater=(num)=>{
    if(num>10){
        // console.log("Greater than 10")
        return true;
    }else{
        // console.log("Lower than 10")
        return false;
    }
}
console.log(greater(7)?"Greater than 10":"Lower than 10");

//5. Create an arrow function that takes two strings, compares their lengths, and 
// returns the longer string.If both have the same length, return “Equal length.”
let length=(str1,str2)=>{
    str1=str1.replace(" ","").length;
    str2=str2.replace(" ","").length;
    if(str1.length<str2.length){
        return str2;
    }else if(str1.length>str2.length){
        return str1;
    }else{
        return "Equal length";
    }
}
console.log(length("LaxmiNarayan","RadhaKrishna"));