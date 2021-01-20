import { renderWeather } from "./renderWeather";
import getData from "./getData";

function handleSearch(event) {
  const input = document.getElementById("city-search");
  const city = input.value;
  renderWeather(getData(city));

  event.preventDefault();
}

export default handleSearch;
