const data = [
    { "id": 1, "caption": "Caption 1", "description": "Description 1" },
    { "id": 2, "caption": "Caption 2", "description": "Description 2" },
    { "id": 3, "caption": "Caption 3", "description": "Description 3" },
    { "id": 4, "caption": "Caption 4", "description": "Description 4" },
    { "id": 5, "caption": "Caption 5", "description": "Description 5" },
    { "id": 6, "caption": "Caption 6", "description": "Description 6" },
    { "id": 7, "caption": "Caption 5", "description": "Description 5" },
    { "id": 8, "caption": "Caption 6", "description": "Description 6" },
    { "id": 9, "caption": "Caption 5", "description": "Description 5" },
    { "id": 10, "caption": "Caption 6", "description": "Description 6" }
];

// Określenie liczby elementów na stronie
const itemsPerPage = 4;
// Inicjalizacja aktualnej strony
let currentPage = 1;

// Funkcja renderująca przyciski do zmiany stron
function renderPagination() {
    const totalPages = Math.ceil(data.length / itemsPerPage); // Obliczenie liczby stron
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = ''; // Czyszczenie poprzednich przycisków

    // Tworzenie przycisków dla każdej strony
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        // Ustawienie klasy 'active' dla przycisku aktualnej strony
        button.className = i === currentPage ? 'active' : 'pag';
        button.addEventListener('click', () => {
            currentPage = i; // Ustawienie nowej strony
            renderContent(); // Ponowne renderowanie zawartości
            renderPagination(); // Ponowne renderowanie paginacji
        });
        paginationContainer.appendChild(button);
    }
}

// Funkcja renderująca zawartość na stronie
function renderContent() {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = ''; // Czyszczenie poprzedniej zawartości

    const searchText = document.getElementById('search-input').value.toLowerCase(); // Pobranie tekstu do wyszukania
    const filteredData = data.filter(item => {
        return (
            item.caption.toLowerCase().includes(searchText) ||  // Sprawdzanie czy caption zawiera tekst
            item.description.toLowerCase().includes(searchText) // Sprawdzanie czy description zawiera tekst
        );
    });

    // Obliczanie indeksów dla wyświetlanych danych
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex); // Wybór danych do wyświetlenia

    // Tworzenie elementów listy dla danych
    currentData.forEach(item => {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.innerHTML = `<h3 class="textfield">${item.caption}</h3>`; // Dodanie tytułu jako nagłówek
        listItem.addEventListener('click', () => {
            // Zapisanie wybranego elementu w localStorage i przejście do strony szczegółów
            localStorage.setItem('selectedItem', JSON.stringify(item));
            window.location.href = `details.html?page=${currentPage}`; // Dodanie aktualnej strony do URL
        });
        contentContainer.appendChild(listItem); // Dodanie elementu do kontenera
    });

    // Renderowanie paginacji na podstawie filtrowanych danych
    renderPagination(filteredData.length);
}

// Funkcja renderująca przyciski do zmiany stron
function renderPagination(filteredDataLength) {
    const totalPages = Math.ceil(filteredDataLength / itemsPerPage); // Obliczenie liczby stron
    const paginationContainer = document.getElementById('pagination-container');
    paginationContainer.innerHTML = ''; // Czyszczenie poprzednich przycisków

    // Tworzenie przycisków dla każdej strony
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        // Ustawienie klasy 'active' dla przycisku aktualnej strony
        button.className = i === currentPage ? 'active' : 'pag';
        button.addEventListener('click', () => {
            currentPage = i; // Ustawienie nowej strony
            renderContent(); // Ponowne renderowanie zawartości
            renderPagination(filteredDataLength); // Ponowne renderowanie paginacji
        });
        paginationContainer.appendChild(button);
    }
}

// Funkcja wykonywana przy załadowaniu strony
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    currentPage = parseInt(urlParams.get('page')) || 1;

    // Dodanie nasłuchiwacza do przycisku filtrowania
    document.getElementById('filter-button').addEventListener('click', () => {
        currentPage = 1; // Zresetowanie strony przy każdym nowym filtrowaniu
        renderContent(); // Renderowanie zawartości na nowo
    });

    renderContent(); // Renderowanie zawartości
    renderPagination(data.length); // Renderowanie paginacji
    injectHeader('head1', 'header1'); // Funkcja do wstawiania nagłówków (jeśli istnieje)
    injectHeader('head2', 'header2'); // Funkcja do wstawiania nagłówków (jeśli istnieje)
};