import "normalize.css";
import "./style.scss";

import { getWeatherDataFromCity } from "./getWeather";
import { getWeatherImg } from "./getWeatherImg";

import { renderTemp } from "./renderTemp";

function getRandom1to20() {
  return Math.floor(Math.random() * 20);
}

function renderWeatherImg(url) {
  const img = document.getElementById("weather");
  img.src = url;
}

async function renderWeather(city) {
  const data = await getWeatherDataFromCity(city)
    .then((data) => {
      renderTemp(data);
      return data;
    })
    .catch((err) => console.log(err));

  let weatherGifs = await getWeatherImg(data.weather[0].main);
  renderWeatherImg(weatherGifs.data[getRandom1to20()].images.original.url);

  return;
}

renderWeather("prague");

function handleSearch(event) {
  const input = document.getElementById("city-search");
  const city = input.value;
  renderWeather(city);

  event.preventDefault();
}

let search = document.getElementById("search-btn");

search.addEventListener("click", handleSearch);
