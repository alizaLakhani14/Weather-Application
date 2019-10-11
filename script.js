const KELVIN = 273;
const LOCATION_NAME = document.querySelector('.location h2');
const ICON = document.querySelector('img');
const TEMPERATURE_IN_CELSIUS = document.querySelector('.temp-degree > h1');
const DESCRIPTION = document.querySelector('.weather-description p');
const WIND_INDEX = document.querySelector(".wind h3");
const HUMIDITY_PERCENTAGE = document.querySelector(".humidity h3");

function getWeather() {
	let cityName = document.querySelector('input').value;
	axios
		.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50c26845238d8cdbe5c3acddbf4ffd1b`)
		.then(function(response) {
			document.querySelector(".weather-card").style.display = "block";
			let icon = response.data.weather[0].icon;
			LOCATION_NAME.innerHTML = `${cityName}, ${response.data.sys.country}`;
			ICON.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
			TEMPERATURE_IN_CELSIUS.innerHTML = `${Math.floor(response.data.main.temp - KELVIN)}°c`;
			DESCRIPTION.innerHTML = response.data.weather[0].description;
			WIND_INDEX.innerHTML = `${Math.floor(response.data.wind.speed * 3.6)}Km/h`;
			HUMIDITY_PERCENTAGE.innerHTML = `${response.data.main. humidity}%`;
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.finally(function() {
			// always executed
		});
}
