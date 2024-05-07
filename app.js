

// let apiKey = "453bec0f92cfe1098067b6933f8162c2";
// let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=karachi";



async function checkWeather(){
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=karachi&appid=453bec0f92cfe1098067b6933f8162c2")
    let data = await response.json();
    console.log(data)
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("cities").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
   
}

checkWeather()