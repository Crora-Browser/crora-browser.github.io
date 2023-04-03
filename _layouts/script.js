const form = document.querySelector('#search-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const searchInput = document.querySelector('#search-input');
    const query = searchInput.value.trim();
    if (query) {
        const url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        window.location.href = url; // Redirect to search results
    }
});
