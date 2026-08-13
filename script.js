// ---- Online counter (fake-live, ticks gently like saloon.wtf) ----
const counterEl = document.getElementById('onlineCounter');
let online = 24 + Math.floor(Math.random() * 10);

function renderCounter() {
  counterEl.textContent = online + ' online';
}
renderCounter();

setInterval(() => {
  const delta = Math.random() < 0.5 ? -1 : 1;
  online = Math.max(12, Math.min(45, online + delta));
  renderCounter();
}, 4000);


// ---- Audio player ----
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const scrubber = document.getElementById('scrubber');
const timeDisplay = document.getElementById('timeDisplay');

function formatTime(seconds) {
  if (!isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return m + ':' + s;
}

function updateTimeDisplay() {
  const current = formatTime(audio.currentTime);
  const duration = formatTime(audio.duration);
  timeDisplay.textContent = current + ' / ' + duration;
}

playBtn.addEventListener('click', () => {
  if (!audio.hasAttribute('src') && !audio.currentSrc) {
    playBtn.textContent = '🔇';
    setTimeout(() => { playBtn.textContent = '▶'; }, 800);
    return;
  }
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '❚❚';
  } else {
    audio.pause();
    playBtn.textContent = '▶';
  }
});

audio.addEventListener('loadedmetadata', () => {
  scrubber.max = audio.duration || 0;
  updateTimeDisplay();
});

audio.addEventListener('timeupdate', () => {
  scrubber.value = audio.currentTime;
  updateTimeDisplay();
});

audio.addEventListener('ended', () => {
  playBtn.textContent = '▶';
});

scrubber.addEventListener('input', () => {
  audio.currentTime = scrubber.value;
});
