const weatherApi={
	key : "f9bfaa32cbeeabe00196d7379b263509",
	baseUrl : "https://api.openweathermap.org/data/2.5/weather",
}

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress',(event)=>{
	if(event.keyCode==13){

		getWeatherReport(searchInputBox.value);
		//console.log(searchInputBox.value);

	}
})


//Anonyms funtion --- EventListener function on keypress




//Get weather report

function getWeatherReport(city){
     fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
     .then(weather=>{
     	return weather.json();
     }).then(showWeatherReport);
}

//show weather report

function showWeatherReport(weather){
	console.log(weather);
	let city = document.getElementById('city');
	//console.log(city);
	city.innerText=`${weather.name},${weather.sys.country}`;
	let temperature = document.getElementById('temp');
	temperature.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;

	let min_max = document.getElementById('min-max');
	min_max.innerHTML = `Min ${Math.floor(weather.main.temp_min)}&deg;C | Max ${Math.ceil(weather.main.temp_max)}&deg;C`;

	let weather_condiditon = document.getElementById('weather');
	weather_condiditon.innerHTML = `${weather.weather[0].description}`;

	let date = document.getElementById('date');

	let todayDate = new Date();

	date.innerText = dateManage(todayDate); 

}

//date manage

function dateManage(dateArg){
	let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturady","Sunday"];

	let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	let year = dateArg.getFullYear();
	let month = months[dateArg.getMonth()];
	let date = dateArg.getDate();
	let day = days[dateArg.getDay()];

	return `${date} ${month} (${day}), ${year}`;
}





//http://api.openweathermap.org/data/2.5/weather?q=Varanasi&appid=f9bfaa32cbeeabe00196d7379b263509
