const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherData = document.getElementById("weatherData");

function getWeather(city) {
  fetch(
    // This will not work until you place right api key in url
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=API_KEY`
  )
    .then((response) => response.json())
    .then((data) => {
      const weather = data.weather[0].description;
      const temperature = data.main.temp;
      const weatherInfo = `Weather: ${weather}<br>Temperature: ${temperature} &#8451;`;
      weatherData.innerHTML = weatherInfo;
    })
    .catch((error) => {
      weatherData.innerHTML = `Error: ${error} `;
    });
}

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;
  getWeather(city);
});
