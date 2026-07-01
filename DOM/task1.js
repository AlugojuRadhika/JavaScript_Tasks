//TASK:1  https://docs.google.com/document/d/1_RYEwC15Agfs8YW_Lt2Za3151QbEjM_64HAUvyBohsE/edit?usp=sharing

// 1.  Create a List and Append to the Body
// Create an unordered list (<ul>) with five list items (<li>),
// each containing unique text. Append the <ul> to the <body>.

let ul=document.createElement("ul")
for(i=1;i<=5;i++){
    let li=document.createElement("li")
    li.innerText="Item"+i
    ul.append(li)
}
document.body.append(ul);
console.log(ul)

// 2. Create a Paragraph Inside a Div and Append to the Body
//  Create a <div> element, and inside it, add a 
//  <p> element with some descriptive text. Append the <div> to the <body>.

let div1=document.createElement("div")
let p1=document.createElement("p")
p1.innerText="Paragraph1";
div1.append(p1)
document.body.append(div1)
console.log(div1)

// or
// let div1=document.createElement("div")
// div1.append(p1=document.createElement("p"))
// p1.innerText="Paragraph1";
// console.log(p1)

// 3. Build a Nested Structure and Append to the Body
//  Create a <div> containing a <h1> heading and
//  a <p> paragraph, both with distinct text. 
//  Append the <div> to the <body>.

let div2=document.createElement("div")
let h1=document.createElement("h1")
let p2=document.createElement("p")
div2.append(h1,p2)
h1.innerText="Heading"
p2.innerText="Paragraph2"
document.body.append(div2)

// 4. Generate a Table Row and Append to the Body
// Create a <table> element with a single row (<tr>) and three cells (<td>),
// each containing some text. Append the <table> to the <body>.

let table=document.createElement("table");
let row=document.createElement("tr")
let data1=document.createElement("td")
let data2=document.createElement("td")
let data3=document.createElement("td")
row.append(data1,data2,data3)
table.append(row)
data1.innerText="Table Data1"
data2.innerText="Table Data2"
data3.innerText="Table Data3"
document.body.append(table)
console.log(table)


// 5. Add Multiple Buttons and Append to the Body
//  Create a <div> and append five <button> elements to it,
//  each with unique text for the button label. 
//  Append the <div> to the <body>.


let div3=document.createElement("div")
let button1=document.createElement("button")
let button2=document.createElement("button")
let button3=document.createElement("button")
let button4=document.createElement("button")
let button5=document.createElement("button")
div3.append(button1,button2,button3,button4,button5)
button1.innerText="Button1"
button2.innerText="Button2"
button3.innerText="Button3"
button4.innerText="Button4"
button5.innerText="Button5"
document.body.append(div3)