// Add hover interaction (optional)
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You selected: ${item.querySelector('h3').textContent}`);
        });
    });
});