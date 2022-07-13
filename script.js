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
