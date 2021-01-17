import "normalize.css";
import "./style.scss";

import { renderWeather } from "./renderGif";
import handleSearch from "./handleSearch";
import { isLSavailable } from "./localStorage";

// default is prague / localstoraged city
let city;
if (isLSavailable()) {
  city = localStorage.getItem("city") || "Prague";
} else {
  city = "Prague";
}
renderWeather(city);

let search = document.getElementById("search-btn");

search.addEventListener("click", handleSearch);
