document.getElementById('startButton').addEventListener('click', () => {
    const home = document.getElementById('home');
    const escapeRoom = document.getElementById('escapeRoom');

    // Hide home page and show escape room loading screen
    home.classList.add('hidden');
    escapeRoom.classList.remove('hidden');

    // Simulate loading screen
    setTimeout(() => {
        document.querySelector('.loading-text').textContent = "Waiting For Permission To Start....";
    }, 3000);
    setTimeout(() => {
        document.querySelector('.loading-text').textContent = "Take Your Seat So We Can Begin!";
    }, 5000);
    setTimeout(() => {
        document.querySelector('.loading-text').textContent = "Escape Room Loaded!";
    }, 7000);
});
