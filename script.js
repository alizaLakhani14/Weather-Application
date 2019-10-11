const KELVIN = 273;
const LOCATION_NAME = document.querySelector('.location h2');
const ICON = document.querySelector('img');
const TEMPERATURE_IN_CELSIUS = document.querySelector('.temp-degree > h1');
const DESCRIPTION = document.querySelector('.weather-description p');
const WIND_INDEX = document.querySelector('.wind h3');
const HUMIDITY_PERCENTAGE = document.querySelector('.humidity h3');

function getWeather() {
	let cityName = document.querySelector('input').value;
	axios
		.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50c26845238d8cdbe5c3acddbf4ffd1b`)
		.then(function(response) {
			// Changing Inner Html
			document.querySelector('.weather-card').style.display = 'block';
			let icon = response.data.weather[0].icon;
			LOCATION_NAME.innerHTML = `${cityName}, ${response.data.sys.country}`;
			ICON.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
			TEMPERATURE_IN_CELSIUS.innerHTML = `${Math.floor(response.data.main.temp - KELVIN)}°c`;
			DESCRIPTION.innerHTML = response.data.weather[0].description;
			WIND_INDEX.innerHTML = `${Math.floor(response.data.wind.speed * 3.6)}Km/h`;
			HUMIDITY_PERCENTAGE.innerHTML = `${response.data.main.humidity}%`;
			let weatherCondition = response.data.weather[0].main;
			// Changing backgrounds
			switch (weatherCondition) {
				case 'Thunderstorm ':
					document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
					document.body.style.backgroundRepeat = 'no-repeat';
					document.body.style.backgroundSize = 'cover';
					break;
				case 'Rain':
				case 'Drizzle':
					document.body.style.backgroundImage = "url('images/rain2.jpg')";
					document.body.style.backgroundRepeat = 'no-repeat';
					document.body.style.backgroundSize = 'cover';
					break;
				case 'Snow':
					document.body.style.backgroundImage = "url('images/snow2.jpg')";
					document.body.style.backgroundRepeat = 'no-repeat';
					document.body.style.backgroundSize = 'cover';
					break;
				case 'Clouds':
					document.body.style.backgroundImage = "url('images/clouds.jpg')";
					document.body.style.backgroundRepeat = 'no-repeat';
					document.body.style.backgroundSize = 'cover';
					break;
				case 'Mist':
				case 'Smoke':
				case 'Haze':
				case 'Dust':
				case 'Fog':
				case 'Sand':
				case 'Ash':
				case 'Squall':
				case 'Tornado':
					document.body.style.backgroundImage = "url('images/fog.jpg')";
					document.body.style.backgroundRepeat = 'no-repeat';
					document.body.style.backgroundSize = 'cover';
					break;
				case 'Clear':
					document.body.style.backgroundImage = "url('images/clear.jpg')";
					document.body.style.backgroundRepeat = 'no-repeat';
					document.body.style.backgroundSize = 'cover';
					break;
				default:
					document.body.style.backgroundImage = "url('images/clear.jpg')"	;
					document.body.style.backgroundRepeat = 'no-repeat';
					document.body.style.backgroundSize = 'cover';
					
			}
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.finally(function() {
			// always executed
		});
}
