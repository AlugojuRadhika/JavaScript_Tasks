//  30|06|2026


// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.title)
// document.title="This is the new Title";
// console.log(document.title)


// let link=document.links
// console.log(link)
// for( let l of link){
//     console.log(l)
// }


// // creating p tag dynamically:

// let p=document.createElement("p");
// p.innerText="This is Paragraph";    
// document.body.append(p); //to get display output in browser
// console.log(p)

// let div=document.createElement("div")
// let p1=document.createElement("p")
// p1.innerText="Paragraph";
// div.append(p1)
// document.body.append(div)
// console.log(div)



// DAY-2 // 1|07|2026
// Using innerText:-
let div1=document.createElement("div");
div1.innerText="JavaScript" //1
div1.innerText="<i>JavaScript</i>" //2
console.log(div1)
document.body.append(div1)

// Using innerHTML:-
    let div2=document.createElement("div")
    div2.innerHTML="JavaScript"; //3
        // div2.innerHTML=`<i style="color:red";>JavaScript</i>`;
        // or
        div2.innerHTML="<i>JavaScript</i>" //4
        div2.style.color="red";
    console.log(div2)
    document.body.append(div2)

let div3=document.createElement("div")
div3.id="main"
div3.className="class"
div3.setAttribute("name","cont")
div3.setAttribute("for","name")
console.log(div3)


// Acessing array values using DOM:

document.body.append("Accessing array values using DOM")
let data1=["Anu","Bhanu","Keerthi"]
let div4=document.createElement("div")
for(let i=1;i<=data1.length;i++){
    let p4=document.createElement("p")
    p4.innerHTML=data1[i];
    div4.append(p4)
}
document.body.append(div4)


let data2=[
    {
        "id":"1",
        "name":"Anu"
    },
    {
        "id":"2",
        "name":"Honey"
    },{
        "id":"3",
        "name":"Tharun"
    }
]
let div5=document.createElement("div")
data2.forEach(element=>{
    let p5=document.createElement("p")
    p5.innerHTML=element.name;
    div5.append(p5)
})
document.body.append(div5)
div5.style.color="green";