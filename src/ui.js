import { playlist } from './playlist.js';

let onlineCount = 28 + Math.floor(Math.random() * 8);

export function formatTime(seconds) {
  if (!seconds || isNaN(seconds) || !isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export function renderPlaylistDrawer(container, getCurrentIndex, onSelectTrack) {
  container.innerHTML = '';
  playlist.forEach((track, i) => {
    const item = document.createElement('div');
    item.className = `track-item ${i === getCurrentIndex() ? 'playing' : ''}`;
    item.innerHTML = `
      <div class="track-left">
        <span class="track-num">${(i + 1).toString().padStart(2, '0')}</span>
        <div>
          <div class="track-name">${track.title}</div>
          <div class="track-artist-sub">${track.artist}</div>
        </div>
      </div>
      <span class="track-duration">${track.duration}</span>
    `;
    item.addEventListener('click', () => {
      onSelectTrack(i);
    });
    container.appendChild(item);
  });
}

export function updateTrackListUI(container, currentIndex) {
  const items = container.querySelectorAll('.track-item');
  items.forEach((item, i) => {
    if (i === currentIndex) {
      item.classList.add('playing');
    } else {
      item.classList.remove('playing');
    }
  });
}

export function initLiveCounter(element) {
  function update() {
    const delta = Math.random() < 0.5 ? -1 : 1;
    onlineCount = Math.max(16, Math.min(54, onlineCount + delta));
    element.textContent = `${onlineCount} listening now`;
  }
  setInterval(update, 3500);
}
