
           // JavaScript for toggling sidebar
const sidebarToggle = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
});

// JavaScript for music player controls
const playerControls = document.querySelector('.player-controls');
const playbackBar = document.querySelector('.playback-bar');
const progressBar = document.querySelector('.progress-bar');
const currTime = document.querySelector('.curr-time');
const totTime = document.querySelector('.tot-time');

let isPlaying = false;
let progressInterval;

function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        // Start playing
        playerControls.querySelector('.fa-play').style.display = 'none';
        playerControls.querySelector('.fa-pause').style.display = 'block';
        // Start progress interval
        progressInterval = setInterval(updateProgress, 1000);
    } else {
        // Pause playing
        playerControls.querySelector('.fa-play').style.display = 'block';
        playerControls.querySelector('.fa-pause').style.display = 'none';
        // Stop progress interval
        clearInterval(progressInterval);
    }
}

function updateProgress() {
    // Update progress bar
    progressBar.value += 1;
    // Update current time
    let currentTime = Math.floor(progressBar.value);
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    currTime.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    // Check if music is finished
    if (currentTime >= progressBar.max) {
        togglePlay();
        // Reset progress bar
        progressBar.value = 0;
    }
}

// Event listener for play/pause button
playerControls.addEventListener('click', togglePlay);
z
