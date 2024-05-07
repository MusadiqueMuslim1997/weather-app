

let apiKey = "453bec0f92cfe1098067b6933f8162c2";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let seacrh = document.getElementById("input-city");


async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json();
    console.log(data)
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("cities").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

}
function searchcity(){
    checkWeather(seacrh.value);
}
checkWeather()