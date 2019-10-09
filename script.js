
function getWeather() {
  let cityName = document.querySelector("input").value;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50c26845238d8cdbe5c3acddbf4ffd1b`)
    .then(function (response) {
      // handle success
      let icon = response.data.weather[0].icon;
      console.log(icon)
      document.querySelector("img").src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      document.querySelector('p').innerHTML = response.data.weather[0].main;
      document.querySelector('h1').innerHTML = `${Math.floor(response.data.main.temp - 273.15)}c`;
      // let weather = response.data.weather[0].main;
      console.log(response.data.weather[0].main);
      let myBody = document.querySelector("body");
      // switch (weather) {
      //   case "Clouds":
      //     document.body.style.background = "url(images/clouds.gif) no-repeat";
      //     document.body.style.backgroundSize = "cover";
      //     // document.body.style.background = "background-repeat: no-repeat;" 
      //     break;
      //   case "Mist":
      //   case "Smoke":
      //   case "Haze":
      //   case "Dust":
      //   case "Fog":
      //   case "Sand":
      //   case "Ash":
      //   case "Squall":
      //   case "Tornado":
      //     document.body.style.background = "url(images/mist.gif) no-repeat";
      //     document.body.style.backgroundSize = "cover";
      //     break;
      //   case "Rain":
      //   case "Drizzle":
      //     document.body.style.background = "url(images/rain.jpg) no-repeat";
      //     document.body.style.backgroundSize = "cover";
      //     break;
      //   case "Clear":
      //     document.body.style.background = "url(images/clear.gif) no-repeat";
      //     document.body.style.backgroundSize = "cover"; 
      //     break;
      //   case "Snow":
      //     document.body.style.background = "url(images/snow.gif) no-repeat";
      //     document.body.style.backgroundSize = "cover";
      //     break;
      //   case "Thunderstorm":
      //     document.body.style.background = "url(images/snow.gif) no-repeat";
      //     document.body.style.backgroundSize = "cover";
      //     break;
      //   default:
      //     document.body.style.background = "url(images/sunny.gif) no-repeat";
      //     document.body.style.backgroundSize = "cover";
      // }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}



