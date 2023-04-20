// import format from "date-fns/format";

export async function getWeather(city) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=83d7578a08f74d83b19144505231804&q=${city}`);
    const data = await response.json();
    const location = {};
    location.name = `${data.location.name}, ${data.location.region}`
    location.localtime = `${data.location.localtime}`.slice(11);
    location.localtime = `Local Time: ${location.localtime}`
    location.date = `${data.location.localtime}`.slice(0, 10);
    
    const current = (({humidity, precip_in, vis_miles, wind_degree, wind_mph, condition}) => 
                     ({humidity, precip_in, vis_miles, wind_degree, wind_mph, condition}))(data.current);
    current.feelslike_f = `Feels like: ${data.current.feelslike_f} °F`;
    current.feelslike_c = `Feels like: ${data.current.feelslike_c} °C`;
    current.temp_f = `${data.current.temp_f} °F`;
    current.temp_c = `${data.current.temp_c} °C`;
    current.humidity = `${current.humidity}%`;
    current.precip_in = `${current.precip_in} in`;
    current.wind_mph = `${current.wind_mph} mph`;
    current.vis_miles = `${current.vis_miles} mi`;
    const goodData = {location, current}
    return goodData;
}
