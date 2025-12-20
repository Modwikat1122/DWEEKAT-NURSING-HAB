// Live search including subtopics
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('#topicsGrid .topic-card');

searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector('.topic-title').textContent.toLowerCase();
        const desc = card.querySelector('.topic-description').textContent.toLowerCase();
        const subtopics = card.querySelector('.topic-subtopics') 
            ? card.querySelector('.topic-subtopics').textContent.toLowerCase() 
            : '';
        
        card.style.display = (title.includes(filter) || desc.includes(filter) || subtopics.includes(filter)) 
            ? '' 
            : 'none';
    });
});
