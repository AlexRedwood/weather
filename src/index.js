import "normalize.css";
import "./style.scss";

import { renderWeather } from "./renderGif";
import handleSearch from "./handleSearch";

// default is prague
renderWeather("prague");

let search = document.getElementById("search-btn");

search.addEventListener("click", handleSearch);
