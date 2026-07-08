function converter(){
    let input1=document.getElementById("input1");
    let input2=document.getElementById("input2");
    let input3=document.getElementById("input3");
    one(input1.value,input2.value,input3.value);
}

async function one(input1,input2,input3){
    const url = `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=${input2}&to=${input3}&amount=${input1}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cc942199c1mshf88b9868413077ap1c1db4jsn2b1742508ca9',
		'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result);
    display(result);
} catch (error) {
	console.error(error);
}
}
function display(output){
    let input1=document.getElementById("input1").value;
    let input2=document.getElementById("input2").value;
    let input3=document.getElementById("input3").value;
    document.getElementById("res").innerHTML=`
    <h3>${input1} value in ${input2} is ${output.result}</h1>
    `
}

