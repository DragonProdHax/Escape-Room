document.getElementById('startButton').addEventListener('click', () => {
    const home = document.getElementById('home');
    const escapeRoom = document.getElementById('escapeRoom');

    // Hide home page and show escape room loading screen
    home.classList.add('hidden');
    escapeRoom.classList.remove('hidden');

    // Simulate loading screen
    let loadingStates = [
        "Waiting For Permission To Start....",
        "Take Your Seat So We Can Begin!",
        "Waiting For Staff To Press Start",
    ];
    let currentState = 0;

    function updateLoadingText() {
        document.querySelector('.loading-text').textContent = loadingStates[currentState];
        currentState = (currentState + 1) % loadingStates.length;
        
        if (currentState === 2) {
            fetch('https://raw.githubusercontent.com/DragonProdHax/Escape-Room/refs/heads/main/Permissions/startthething.txt')
                .then(response => response.text())
                .then(data => {
                    if (data.trim() === "1") {
                        document.querySelector('.loading-text').textContent = "Escape Room Loaded!";
                        clearInterval(loadingInterval);
                    } else {
                        currentState = 0;
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    currentState = 0;
                });
        }
    }

    let loadingInterval = setInterval(updateLoadingText, 2000);});
