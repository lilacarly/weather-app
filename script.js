//below is displaying the day of the week and the time

let now = new Date();
let days = [
  //using this in order to turn the number of the day into the word
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()]; //here we're getting using the index to display the word of the day not the number
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`; //this is making the hour have a 0 in front if it is less than 10
}
let currentMinute = now.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`; //this is making the minutes have a 0 in front if it is less than 10
}
let dayTime = `${currentDay} ${currentHour}:${currentMinute}`;

let displayDay = document.querySelector("#todayDate");
displayDay.innerHTML = dayTime;

//below is to search for a city and display that city, and weather at the city
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  tempDisplay = document.querySelector("#theTemp");
  tempDisplay.innerHTML = temperature;

  // below is to change between fahrenheit and celsius
  function toFahrenheit(event) {
    event.preventDefault();
    fahrenheitLink.classList.add("active");
    celsiusLink.classList.remove("active");
    let temperatureElement = document.querySelector("#theTemp");
    temperatureElement.innerHTML = temperature;
  }

  function toCelsius(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector("#theTemp");
    let celsiusTemp = Math.round(((temperature - 32) * 5) / 9);
    console.log(celsiusTemp);
    temperatureElement.innerHTML = celsiusTemp;
  }

  let fahrenheitLink = document.querySelector("#fahrenheit");
  fahrenheitLink.addEventListener("click", toFahrenheit);
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.addEventListener("click", toCelsius);

  document.querySelector("#cardCity").innerHTML = response.data.name;
  descriptionDisplay = document.querySelector("#descriptionElement");
  descriptionDisplay.innerHTML = response.data.weather[0].description;
  windDisplay = document.querySelector("#windspeedElement");
  windDisplay.innerHTML = response.data.wind.speed;
  humidityDisplay = document.querySelector("#humidityElement");
  humidityDisplay.innerHTML = response.data.main.humidity;
  iconElement = document.querySelector("#emoji");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}
function searchCity(city) {
  let apiKey = "79556a453ffc6ed66cacb6d61dc994cc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  debugger;
  event.preventDefault();
  let city = document.querySelector("#cityEntry").value;
  searchCity(city);
}

let newCity = document.querySelector("#search-form");
newCity.addEventListener("submit", handleSubmit);

searchCity("Boston");

//below is what to do when the current location button gets pressed
//let currentLocationButton = document.querySelector("button");
//currentLocationButton.addEventListener("click", getCurrentLocation);

//function getCurrentLocation(event) {
// event.preventDefault();
//navigator.geolocation.getCurrentPosition(showPosition);
//function showPosition(position) {
//let apiKey = "79556a453ffc6ed66cacb6d61dc994cc";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
//axios.get(apiUrl).then(showTemperature);
//}
//}
