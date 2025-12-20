const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('#topicsGrid .topic-card');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector('.topic-title').textContent.toLowerCase();
        const desc = card.querySelector('.topic-description').textContent.toLowerCase();
        const subtopicsDiv = card.querySelector('.topic-subtopics');
        let subtopicsText = '';
        if (subtopicsDiv) {
            subtopicsText = Array.from(subtopicsDiv.querySelectorAll('span'))
                                 .map(span => span.textContent.toLowerCase())
                                 .join(' ');
        }
        card.style.display = (title.includes(filter) || desc.includes(filter) || subtopicsText.includes(filter)) ? '' : 'none';
    });
});
