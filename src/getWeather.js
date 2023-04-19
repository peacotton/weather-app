export async function getWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=83d7578a08f74d83b19144505231804&q=${city}`);
    const data = await response.json();
    const location = (({name, region, localtime}) => ({name, region, localtime}))(data.location);
    const current = (({feelslike_f, humidity, precip_in, temp_f, vis_miles, wind_degree, wind_mph, condition}) => 
                     ({feelslike_f, humidity, precip_in, temp_f, vis_miles, wind_degree, wind_mph, condition}))(data.current);
    const goodData = {location, current}
    return goodData;
}
