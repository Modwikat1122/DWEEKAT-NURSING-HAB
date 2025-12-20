// البحث في كروت المواضيع
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const topicCards = document.querySelectorAll('.topic-card');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();

        topicCards.forEach(card => {
            const title = card.querySelector('.topic-title').textContent.toLowerCase();
            const desc = card.querySelector('.topic-description').textContent.toLowerCase();

            if (title.includes(filter) || desc.includes(filter)) {
                card.style.display = 'block'; // إظهار الكرت
            } else {
                card.style.display = 'none'; // إخفاء الكرت
            }
        });
    });
});
