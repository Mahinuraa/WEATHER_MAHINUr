const searchInput = document.querySelector(".saerch");
const saerchBtn = document.querySelector(".saerch-btn");

const weather = {
  apiKey: "6b4c292e3e049dbf64d6c2441cc77864",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.displeyWeather(data);
      });
  },
  displeyWeather: function (data) {
    document.querySelector(".weather-country").innerText += ` ${data.name} `;
    document.querySelector(".temp").innerText = data.main.temp;
    document.querySelector(
      ".humidity"
    ).innerText = `Влажность ${data.main.humidity}%`;
    document.querySelector(
      ".speed"
    ).innerText = `Скорость ветра ${data.wind.speed} км/ч`;
    document.querySelector(".img").src = "https://openweathermap.org/img/wn/";
  },
  searchWeaher: function () {
    this.fetchWeather(searchInput.value);
  },
};

searchInput.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    weather.searchWeaher();
  }
});

saerchBtn.addEventListener("click", () => {
  weather.searchWeaher();
});
