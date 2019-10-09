let city = document.querySelector(".city");
let temperature = document.querySelector(".temperature .degree");
let description = document.querySelector(".temperature .weather-description");
let wind = document.querySelector(".wind p");
let humidity = document.querySelector(".humidity p");
const KELVIN = 273;
let weatherIcon = document.querySelector("img");

// document.body.style.backgroundImage="url(day-bg.jpg)";  
     



function getWeather() {
  let cityName = document.querySelector("input").value;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50c26845238d8cdbe5c3acddbf4ffd1b`)
    .then(function (response) {
      // handle success
      let icon = response.data.weather[0].icon;
      city.innerHTML = `${cityName}, ${response.data.sys.country}`;
      weatherIcon.src =`http://openweathermap.org/img/wn/${icon}@2x.png`;
      temperature.innerHTML =  `${Math.floor(response.data.main.temp - KELVIN)}°c`;
      wind.innerHTML = `${Math.floor(response.data.wind.speed * 3.6)} Km/h`;
      humidity.innerHTML = `${response.data.main.humidity}%`;
      description.innerHTML = `${response.data.weather[0].description}`;  
      console.log(city.innerHTML);
      let timeInHours = response.data.timezone/3600;
      if(timeInHours < 12){
        document.body.style.backgroundImage="url(day-bg.jpg)";  
      } else{
        document.body.style.backgroundImage="url(night-bg.jpg)";
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}



