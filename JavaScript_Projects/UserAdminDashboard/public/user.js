async function userData(){
    // let res=await fetch("http://localhost:3000/Products");
    let res=await fetch("https://htmlcssjavascript-projects-4.onrender.com/Products");
    try {
        if(!res.ok){
            throw new Error("Something Went Wrong");
        }
        let data=await res.json();
        showdata(data);
    } catch (error) {
        console.log(error);
    }
}
let container=document.getElementById("container")
function showdata(data){
    data.forEach((ele)=>{
        let item=document.createElement("div");
        item.className="item";
        item.innerHTML=`
        <p>Product Id: ${ele.id}</p>
        <p>${ele.item}</p>
        <img src='${ele.image}' class="img"/>
        <p>${ele.price}</p>
        <p>${ele.stockAvailable}</p>
        `
        container.appendChild(item);
    })
}
addEventListener("DOMContentLoaded",userData);