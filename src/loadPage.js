import { fillContent } from "./fillContent";

export function loadPage() {
    // TEMP
    fillContent(document.getElementById('searchbar').value)

    document.getElementById('searchButton').addEventListener('click', () => {
        fillContent(document.getElementById('searchbar').value);
    })
    document.getElementById('searchbar').addEventListener('keydown', (e) => {
        if (e.code == 'Enter') {
          fillContent(document.getElementById('searchbar').value);
        }
    })
}