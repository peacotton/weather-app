import { fillContent } from "./fillContent";

export function loadPage() {
    // TEMP
    fillContent(document.getElementById('searchbar').value);

    function hideSearch() {
        const search = document.getElementById('search');
        search.classList.remove('showSearch');
        search.classList.add('hideSearch');
        document.getElementById('magnify').addEventListener('click', showSearch, {once: true})
    }

    function showSearch() {
        const search = document.getElementById('search');
        search.classList.remove('hideSearch');
        search.classList.add('showSearch');
        const searchbar = document.getElementById('searchbar');
        searchbar.focus();
        searchbar.value = '';
        document.getElementById('magnify').addEventListener('click', hideSearch, {once: true})
    }

    document.getElementById('searchButton').addEventListener('click', () => {
        fillContent(document.getElementById('searchbar').value);
    })
    document.getElementById('searchbar').addEventListener('keydown', (e) => {
        if (e.code == 'Enter') {
          fillContent(document.getElementById('searchbar').value);
        }
    })

    hideSearch();
}