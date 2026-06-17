// // // let h1 = document.getElementById('surprise') //1 // to dispaly the content in js
// // // console.log(h1)

// // let h1=document.getElementById('sur') //2 // to display the content in html page from js
// // // h1.textContent='Good Morning 😁'

// // //  or 4,5 or below 4,7,8,9 any thing both are same

// // let surprise = setTimeout(function () { //3 // to display the content in html page from js
// //     h1.textContent = "Good Morning"
// // }, 2000)

// // // clearTimeout(surprise) //3 //to get of settimeout

// // let button=document.getElementById('button')  //using clearTimeout
// // button.addEventListener('click',function(){
// //     clearTimeout(surprise);
// //     console.log("data cleared");
// //     h1.textContent="you have cleared the data"
// //     button.textContent="cleared"
// // })




// // to display exam questions like competitive exams: //4

// let questions=[
//     "what is sql?",
//     "what is java?",
//     "what is html?",
//     "what is git?",
//     "what is github?",
//     "what is css?",
//     "what is javascript?"
// ]
// //to get only fisrt question:-

// // let ques=document.getElementById('ques')  //5
// // ques.textContent=questions[0]

// // -----------
// // to get second question after some time of getting first question:-

// // let ques=document.getElementById('ques') //6
// // let index=0;
// // setTimeout(()=>{
// //     ques.textContent=questions[index];
// //     index=(index+1)%questions.length;
    
// // },2000)

// // -------- using setInterval for infinite loop iterations
// let ques=document.getElementById('ques') //7
// let index=0;
// let set=setInterval(()=>{
// ques.textContent=questions[index];
//     index=(index+1)%questions.length;
// },2000)


// // -------- using clearInterval for infinite loop iterations

// // let button2=document.getElementById('button2') //8
// // button2.addEventListener('click',function(){
// //     clearInterval(set);
// //     console.log("No More Questions are there")
// //     ques.textContent="Time Up!!!";
// // })


// setInterval(function(){ //for change seconds //9
//     console.log(new Date())
// },1000)
//or 72,74 or 76 to 79

setInterval(function(){
    let date=new Date();
    console.log(date)
},1000)


setInterval(function(){
    let date=new Date();
    console.log(date.getSeconds())
    // console.log(date)
},1000)

