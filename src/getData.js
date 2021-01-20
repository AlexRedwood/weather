import { getCityData } from "./getCityData";
import { getGifURL } from "./getGifURL";

async function getData(city) {
  const weather = await getCityData(city);
  const description = weather.weather[0].description;

  const gifURL = await getGifURL(description);

  const data = { weather, gifURL };
  return data;
}

export default getData;
