const video = document.getElementById('video');
const playerButton = document.getElementById('player__button');
const progress = document.getElementById('progress');
const progressFilled = document.getElementById('progress__filled');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind');
const fastForwardButton = document.getElementById('fastForward');

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    if (this.name === 'volume') {
        video.volume = this.value;
    } else if (this.name === 'playbackSpeed') {
        video.playbackRate = this.value;
    }
}

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playerButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playerButton.textContent = '►';
    }
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

function rewind() {
    video.currentTime -= 10;
}

function fastForward() {
    video.currentTime += 25;
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

playerButton.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', updateProgress);
rewindButton.addEventListener('click', rewind);
fastForwardButton.addEventListener('click', fastForward);
