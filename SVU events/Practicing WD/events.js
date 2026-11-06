
const form = document.getElementById('filter-form');
const searchInput = document.getElementById('search-input');
const categorySelect = document.getElementById('category-select');
const locationSelect = document.getElementById('location-select');
const fromDateInput = document.getElementById('from-date');
const toDateInput = document.getElementById('to-date');
const resetButton = document.getElementById('reset-button');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');

const cards = document.querySelectorAll('.event-item');

function fillLocationOptions() {
    const locations = new Set();

    cards.forEach(function (card) {
        locations.add(card.dataset.location);
    });

    locations.forEach(function (location) {
        const option = document.createElement('option'); 
        option.value = location;                         
        option.textContent = location;                   
        locationSelect.appendChild(option);              
    });
}

function applyFilters() {
    // Read the current value of every filter
    const query = searchInput.value.trim().toLowerCase(); 
    const category = categorySelect.value;                
    const location = locationSelect.value;                
    const fromDate = fromDateInput.value;               
    const toDate = toDateInput.value;

    let visibleCount = 0;

    cards.forEach(function (card) {
        const title = card.querySelector('.card-title').textContent;
        const description = card.querySelector('.event-description').textContent;
        const searchableText = (title + ' ' + description).toLowerCase();

        const cardCategories = card.dataset.category.split(' ');

        const matchesSearch = searchableText.includes(query);
        const matchesCategory = category === '' || cardCategories.includes(category);
        const matchesLocation = location === '' || card.dataset.location === location;

        const matchesFrom = fromDate === '' || card.dataset.date >= fromDate;
        const matchesTo = toDate === '' || card.dataset.date <= toDate;

        const isVisible = matchesSearch && matchesCategory && matchesLocation && matchesFrom && matchesTo;

        card.classList.toggle('d-none', !isVisible);

        if (isVisible) {
            visibleCount++;
        }
    });

    resultsCount.textContent = 'عدد الفعاليات المعروضة: ' + visibleCount;
    noResults.classList.toggle('d-none', visibleCount !== 0);
}

function resetFilters() {
    searchInput.value = '';
    categorySelect.value = '';
    locationSelect.value = '';
    fromDateInput.value = '';
    toDateInput.value = '';
    applyFilters();
}

form.addEventListener('input', applyFilters);

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

resetButton.addEventListener('click', resetFilters);

fillLocationOptions();

const params = new URLSearchParams(window.location.search);
const categoryFromUrl = params.get('category');
if (categoryFromUrl) {
    categorySelect.value = categoryFromUrl;
}

applyFilters(); 
