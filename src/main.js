import './styles/base.css';
import './styles/player.css';
import './styles/drawer.css';

import { playlist } from './playlist.js';
import { formatTime, initClock, renderPlaylistDrawer, updateTrackListUI } from './ui.js';

let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;

const audio = document.getElementById('audioEngine');
const clockEl = document.getElementById('clock');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const playlistToggleBtn = document.getElementById('playlistToggleBtn');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

const songTitleEl = document.getElementById('songTitle');
const songArtistEl = document.getElementById('songArtist');
const pillDiscEl = document.getElementById('pillDisc');

const scrubberSlider = document.getElementById('scrubberSlider');
const progressFill = document.getElementById('progressFill');
const progressDot = document.getElementById('progressDot');
const timeDisplay = document.getElementById('timeDisplay');
const liveCounterEl = document.getElementById('liveCounterText');

const drawerBackdrop = document.getElementById('drawerBackdrop');
const trackListContainer = document.getElementById('trackListContainer');

const ytMusicLink = document.getElementById('ytMusicLink');
if (ytMusicLink) ytMusicLink.href = import.meta.env.VITE_YT_MUSIC_PLAYLIST_URL || '#';

function loadTrack(index) {
  if (index < 0) index = playlist.length - 1;
  if (index >= playlist.length) index = 0;
  
  currentIndex = index;
  const track = playlist[currentIndex];

  songTitleEl.textContent = track.title;
  songArtistEl.textContent = `${track.artist} (${track.year})`;

  audio.src = track.src;
  audio.load();
  updateTrackListUI(trackListContainer, currentIndex);
}

function playTrack() {
  audio.play().then(() => {
    isPlaying = true;
    playPauseBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
    if (pillDiscEl) {
      pillDiscEl.classList.add('spinning');
      pillDiscEl.classList.remove('paused');
    }
  }).catch((err) => console.warn("Playback error:", err));
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  if (pillDiscEl) {
    pillDiscEl.classList.add('paused');
  }
}

function togglePlay() {
  if (isPlaying) pauseTrack();
  else playTrack();
}

function nextTrack() {
  if (isShuffle) {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } while (nextIndex === currentIndex && playlist.length > 1);
    loadTrack(nextIndex);
  } else {
    loadTrack(currentIndex + 1);
  }
  playTrack();
}

function prevTrack() {
  loadTrack(currentIndex - 1);
  playTrack();
}

function updateProgressUI(current, duration) {
  if (!duration) return;
  const pct = (current / duration) * 100;
  progressFill.style.width = `${pct}%`;
  progressDot.style.left = `${pct}%`;
  timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
}

playPauseBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
});

audio.addEventListener('loadedmetadata', () => {
  scrubberSlider.max = Math.floor(audio.duration || 0);
  timeDisplay.textContent = `0:00 / ${formatTime(audio.duration)}`;
});

audio.addEventListener('timeupdate', () => {
  if (!isNaN(audio.currentTime) && audio.duration) {
    const current = Math.floor(audio.currentTime);
    const duration = Math.floor(audio.duration);
    scrubberSlider.value = current;
    updateProgressUI(current, duration);
  }
});

function handleScrub(val) {
  const seekTime = parseFloat(val);
  audio.currentTime = seekTime;
  updateProgressUI(seekTime, audio.duration);
}

scrubberSlider.addEventListener('input', (e) => handleScrub(e.target.value));
scrubberSlider.addEventListener('change', (e) => handleScrub(e.target.value));

audio.addEventListener('ended', nextTrack);

playlistToggleBtn.addEventListener('click', () => drawerBackdrop.classList.add('open'));
closeDrawerBtn.addEventListener('click', () => drawerBackdrop.classList.remove('open'));
drawerBackdrop.addEventListener('click', (e) => {
  if (e.target === drawerBackdrop) drawerBackdrop.classList.remove('open');
});

window.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT') return;
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  else if (e.code === 'ArrowRight') {
    e.preventDefault();
    if (e.shiftKey) nextTrack();
    else handleScrub(Math.min(audio.duration || 0, audio.currentTime + 5));
  }
  else if (e.code === 'ArrowLeft') {
    e.preventDefault();
    if (e.shiftKey) prevTrack();
    else handleScrub(Math.max(0, audio.currentTime - 5));
  }
});

renderPlaylistDrawer(trackListContainer, () => currentIndex, (idx) => {
  loadTrack(idx);
  playTrack();
  drawerBackdrop.classList.remove('open');
});

if (clockEl) initClock(clockEl);
loadTrack(0);
