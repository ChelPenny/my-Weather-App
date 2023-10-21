function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemperatureC = document.querySelector("#current-temp-celsius");
  currentTemperatureC.innerHTML = `${temperature}&degc`;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city.value}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function showCurrentLocationTemperature(response) {
  let currentLocation = response.data.name;
  let currentTemperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${currentLocation}`;
  let currentTemperatureC = document.querySelector("#current-temp-celsius");
  currentTemperatureC.innerHTML = `${currentTemperature}&degc`;
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentLocationTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let formCity = document.querySelector("#city-form");
formCity.addEventListener("submit", search);

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
