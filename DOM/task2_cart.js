let data=[
    {
        "id":"25",
        "phone":"Iphone",
        "price":"70000Rs",
        "Review":"4 Star"
    },
    {
        "id":"25",
        "phone":"Realme",
        "price":"40000Rs",
        "Review":"3 Star"
    },
    {
        "id":"22",
        "phone":"Samsung",
        "price":"56000Rs",
        "Review":"5 Star"
    },
    {
        "id":"266",
        "phone":"Vivo",
        "price":"40000Rs",
        "Review":"4 Star"
    },
    {
        "id":"246",
        "phone":"Oppo",
        "price":"30000Rs",
        "Review":"3 Star"
    }
]

let div1=document.createElement("div");
data.forEach((element,index)=>{
    let d1=document.createElement("div");
        let p=document.createElement("p");
    p.innerHTML=`<i style="color:red;">Id: ${element.id}<br>
    Phone: ${element.phone}<br>
    Price: ${element.price} <br>
    Review: ${element.Review}</i>`;
    d1.className="d1";
    d1.append(p);
    div1.append(d1);
})
div1.className="div1";
document.body.append(div1);
