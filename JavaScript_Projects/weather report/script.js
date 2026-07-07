function temperature(){
    let input=document.getElementById("city");
    getData(input.value);
    // console.log(input.value);
}
async function getData(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cc942199c1mshf88b9868413077ap1c1db4jsn2b1742508ca9',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	// console.log(result);
    display(result);
} catch (error) {
	console.log(error);
}
}
function display(ans){
    let data=document.getElementById("cont");
    data.innerHTML=`
	<h1>${ans.main.temp}</h1>
	`;
}
