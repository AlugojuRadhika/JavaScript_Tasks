// fetching JSON data:-
async function admindata() {
    let res = await fetch("http://localhost:3000/Products");
    try {
        if (!res.ok) {
            throw new Error("Something Went Wrong");
        }
        let data = await res.json();
        display(data);
    }
    catch (error) {
        console.log(error);
    }

}

// accessing container and keeping that fetched data into browser:-
function display(data) {
    let container = document.getElementById("container");
    // let item = document.createElement("div");
    // item.className="item"
    container.innerHTML = data.map((products) => {
        return `
        <div class=item>
        <p>Product Id: ${products.id}</p>
        <p>${products.item}</p>
        <img src='${products.image}'/>
        <p>${products.price}</p>
        <p>${products.stockAvailable}</p>
        <button id='deletebtn${products.id}'>Delete</button>
        <button id='editbtn${products.id}'>Edit</button>
        </div>
        `
    }).join("");
    // container.appendChild(item);
    data.forEach((products) => {
        let deletebtn = document.getElementById(`deletebtn${products.id}`);
        let editbtn = document.getElementById(`editbtn${products.id}`)
        deletebtn.onclick = () => {
            // alert('Successfully item deleted');
            deleteData(products.id)
        }
        editbtn.onclick = () => {
            // alert('Successfully item edited');
            editData(products.id);
        }
    });
}


// deleting data:-
async function deleteData(id) {
    let res = await fetch(`http://localhost:3000/Products/${id}`, { "method": "DELETE" });
    try {
        if (!res.ok) {
            throw new Error("Something Went Wrong");
        }
        alert("Successfully item deleted");
    } catch (error) {
        console.error(error);
    }
}

// editing data:-
async function editData(id) {
    let itemId = document.getElementById("id");
    let name = document.getElementById("item");
    let image = document.getElementById("image");
    let price = document.getElementById("price");
    let stockAvailable = document.getElementById("stockAvailable");
    let res = await fetch(`http://localhost:3000/Products/${id}`)
    try {
        if (!res.ok) {
            throw new Error("Something Went Wrong");
        }
        let data = await res.json();
        itemId.value = data.id;
        name.value = data.item;
        image.value = data.image;
        price.value = data.price;
        stockAvailable.value = data.stockAvailable;
    } catch (error) {
        console.log(error)
    }

}
// or use this instead of directly writing savebtn() in html
// let savebtn=document.getElementById("saved");
// savebtn.onclick=()=>{
//     saved();
// }
async function savedbtn(){
    let itemId = document.getElementById("id").value;
    let name = document.getElementById("item").value;
    let image = document.getElementById("image").value;
    let price = document.getElementById("price").value;
    let stockAvailable = document.getElementById("stockAvailable").value; 
    let obj={
        "id":itemId,
        "item":name,
        "image":image,
        "price":price,
        "stockAvailable":stockAvailable
    }

    // for only put:-
    // let res=await fetch(`http://localhost:3000/Products/${itemId}`,{
    //     "method":"PUT",

    // for both put and post:-
    let productsName=itemId?"PUT":"POST";
    let productsId=itemId?`http://localhost:3000/Products/${itemId}`:"http://localhost:3000/Products";
    let res=await fetch(productsId,{
        "method":productsName,
        "headers":{
            "content-Type":"application/json"
        },
        "body":JSON.stringify(obj)
    })
    try {
        if(!res.ok){
            throw new Error("Something Went Wrong")
        }
        alert("successfully changes update");
    } catch (error) {
        
    }


}
addEventListener("DOMContentLoaded", admindata);
