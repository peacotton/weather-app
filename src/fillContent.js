import { getWeather } from "./getWeather";

export async function fillContent(search) {
    const data = await getWeather(search);

    const condition = document.getElementById('weatherImg');
    condition.src = `https:${data.current.condition.icon}`;
    const conditionText = document.getElementById('conditionText');
    conditionText.textContent = data.current.condition.text;


    for (const property in data.current) {
        // console.log(`${property}: ${data.current[property]}`);
        if (document.getElementById(`${property}`)) {
            document.getElementById(`${property}`).textContent = `${data.current[property]}`;
        }
    }

    for (const property in data.location) {
        // console.log(`${property}: ${data.location[property]}`);
        if (document.getElementById(`${property}`)) {
            document.getElementById(`${property}`).textContent = `${data.location[property]}`;
        }
    }
}