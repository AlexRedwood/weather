import "normalize.css";
import "./style.scss";

import getData from "./getData";
import { renderWeather } from "./renderWeather";
import handleSearch from "./handleSearch";
import { isLSavailable } from "./localStorage";

// used prague (initial default) or localstoraged city
let city;
if (isLSavailable()) {
  city = localStorage.getItem("city") || "Prague";
} else {
  city = "Prague";
}

// initial render of the default city
renderWeather(getData(city));

// make search button do work and render city weather on demand
let search = document.getElementById("search-btn");
search.addEventListener("click", handleSearch);
