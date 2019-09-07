// API : Application Programming Interface(set of URLs to communicate with the Backend).
// Static: Aapne hae cheez hardcode kardi.Agar kuch change karna hai tou har dafa code update karna hai.
// Dynamic : khud ba khud upsdate honay wali cheez ko dynamic kehtay hain.
// www.faebook.com (Server ka address)
// www.facebook.com/messenger(messenger = path)
//  www.facebook.com/messenger?(Question mark aagay jo bh likha hai usay query string kehtay hain).
/*
https://github.com/search?q=somia+ansari
protocol : https
server address : www.github.com
path:/search
queryString:q=somia+ansari

https://www.google.com/search?hl=en&
ei=PQlhXfb4LY_4wALXlZioBQ&
q=biryani&
oq=biryani&
gs_l=psy-ab.3..0i67l5j0l5.27995.30414..31046...0.1..0.368.1719.0j6j0j2......0....1..gws-wiz.....0..0i71j0i131.QGq8pfuTPU8
&ved=0ahUKEwi2i4q6npvkAhUPPFAKHdcKBlUQ4dUDCAo&
uact=5
*/

function getWeather() {
  let cityName = document.querySelector("input").value;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50c26845238d8cdbe5c3acddbf4ffd1b`)
    .then(function (response) {
      // handle success
      let icon = response.data.weather[0].icon;
      console.log(icon)
      document.querySelector("img").src = `http://openweathermap.org/img/wn/${icon}@2x.png`
      let iconDivAns;
      document.querySelector(".icon-div").innerHTML = icon;
      // switch (icon) {
      //   case "03d":
      //     iconDivAns = `<div class="icon-div">
      //       <img src="http://openweathermap.org/img/wn/03d@2x.png"></img>
      //     </div>`
      //     break;
      //   case "04n":
      //     iconDivAns = `<div class="icon-div">
      //       <img src="http://openweathermap.org/img/wn/04n@2x.png"></img>
      //     </div>`
      //     break;
      //   default:
      //   //code block
      // }

      console.log(response.data.weather[0].main);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}




