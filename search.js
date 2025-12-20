// search.js

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const topicsGrid = document.getElementById("topicsGrid");

    // وظيفة لتحديث البحث
    function filterTopics() {
        const filter = searchInput.value.toLowerCase();
        const topicCards = topicsGrid.querySelectorAll(".topic-card");

        topicCards.forEach(card => {
            const title = card.querySelector(".topic-title").textContent.toLowerCase();
            const description = card.querySelector(".topic-description").textContent.toLowerCase();

            if (title.includes(filter) || description.includes(filter)) {
                card.style.display = ""; // أظهر الكارد
            } else {
                card.style.display = "none"; // اخفي الكارد
            }
        });
    }

    // حدث عند الكتابة في البحث
    searchInput.addEventListener("input", filterTopics);

    // إذا أضفنا كروت جديدة ديناميكيًا لاحقًا
    const observer = new MutationObserver(filterTopics);
    observer.observe(topicsGrid, { childList: true, subtree: true });
});
