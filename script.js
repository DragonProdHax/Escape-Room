document.getElementById('startButton').addEventListener('click', () => {
    const home = document.getElementById('home');
    const escapeRoom = document.getElementById('escapeRoom');

    // Hide home page and show escape room loading screen
    home.classList.add('hidden');
    escapeRoom.classList.remove('hidden');

    // Simulate loading screen
    let loadingStates = [
        "Waiting For Permission To Start....",
        "Take Your Seat So We Can Begin. And Turn Up Your Audio For The Best Experience!",
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
                        let countdown = 10;
                        const audio = new Audio('https://res.cloudinary.com/dkqqcqf6f/video/upload/v1733186350/TunePocket-Countdown-Timer-10-Sec-Robot-Vocoder-1-Preview_cgccrt.mp3');
                        audio.play();
                        clearInterval(loadingInterval);
                        
                        const countdownInterval = setInterval(() => {
                            document.querySelector('.loading-text').textContent = `Starting in ${countdown}`;
                            countdown--;
                            
                            if (countdown < 0) {
                                clearInterval(countdownInterval);
                                document.querySelector('.loading-text').textContent = "Welcome To The Escape Room!";
                                const video = document.createElement('video');
                                video.src = 'https://res.cloudinary.com/dgl6hxabu/video/upload/v1733189098/My_video_-_Date_online-video-cutter.com_online-video-cutter.com_xalfwz.mp4';
                                video.autoplay = true;
                                escapeRoom.appendChild(video);
                                
                                document.addEventListener('keydown', (event) => {
                                    if (event.key.toLowerCase() === 'p') {
                                        if (video.paused) {
                                            video.play();
                                        } else {
                                            video.pause();
                                        }
                                    }
                                });
                            }
                        }, 1000);
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
