let hou=document.getElementById('hours')
setInterval(()=>{
    let date=new Date();
    hou.textContent=date.getHours()
},1000)

let min=document.getElementById('minutes')
setInterval(()=>{
    let date=new Date();
    min.textContent=date.getMinutes()
},1000)

let sec=document.getElementById('seconds')
setInterval(function(){
    let date=new Date()
    sec.textContent=date.getSeconds()
},1000)

let d=document.getElementById('date')
setInterval(()=>{
    let date=new Date();
    d.textContent=date.getDate()
},1000)

// let d1=document.getElementById('day')
// setInterval(()=>{
//     let date=new Date();
//     d1.textContent=date.getDay()
// })

let m=document.getElementById('month')
setInterval(()=>{
    let date=new Date();
    m.textContent=date.getMonth()+1
},1000)

let y=document.getElementById('year')
setInterval(()=>{
    let date=new Date();
    y.textContent=date.getFullYear()
},1000)

