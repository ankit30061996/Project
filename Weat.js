/*const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c4246d074msh187348a2947d93ap1f5dcejsnd31203f4b709',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
*/
function getData()
{
    const city = search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0fa9ebae3cmsh524a1994e11af3ap13953ajsn63f83424600e',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            temp.innerHTML = response.temp;
            ws.innerHTML = response.wind_speed;
            hmdty.innerHTML = response.humidity

        })
        .catch(err => console.error(err));
}