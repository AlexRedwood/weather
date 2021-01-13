import "normalize.css";
import "./style.scss";

import { getWeatherDataFromCity } from "./getWeather";
import { renderTemp } from "./renderTemp";

getWeatherDataFromCity("LONDON").then((data) => renderTemp(data));

async function showWeather() {
  const input = document.getElementById("city-search");
  const city = input.value;
  await getWeatherDataFromCity(city).then((data) => renderTemp(data));
}

let search = document.getElementById("search-btn");

search.addEventListener("click", showWeather);
