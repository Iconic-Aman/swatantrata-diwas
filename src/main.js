import './styles/base.css';
import './styles/player.css';
import './styles/drawer.css';

import { playlist } from './playlist.js';
import { formatTime, renderPlaylistDrawer, updateTrackListUI, initLiveCounter } from './ui.js';

let currentIndex = 0;
let isPlaying = false;
let isShuffle = false;

const audio = document.getElementById('audioEngine');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const playlistToggleBtn = document.getElementById('playlistToggleBtn');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');

const songTitleEl = document.getElementById('songTitle');
const songArtistEl = document.getElementById('songArtist');
const tagBadgeEl = document.getElementById('tagBadge');
const vinylDiscEl = document.getElementById('vinylDisc');

const scrubberSlider = document.getElementById('scrubberSlider');
const currentTimeEl = document.getElementById('currentTimeText');
const durationTimeEl = document.getElementById('durationTimeText');

const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const liveCounterEl = document.getElementById('liveCounterText');

const drawerBackdrop = document.getElementById('drawerBackdrop');
const trackListContainer = document.getElementById('trackListContainer');

const spotifyLink = document.getElementById('spotifyLink');
const ytMusicLink = document.getElementById('ytMusicLink');
if (spotifyLink) spotifyLink.href = import.meta.env.VITE_SPOTIFY_PLAYLIST_URL || '#';
if (ytMusicLink) ytMusicLink.href = import.meta.env.VITE_YT_MUSIC_PLAYLIST_URL || '#';

function loadTrack(index) {
  if (index < 0) index = playlist.length - 1;
  if (index >= playlist.length) index = 0;
  
  currentIndex = index;
  const track = playlist[currentIndex];

  songTitleEl.textContent = track.title;
  songArtistEl.textContent = `${track.artist} (${track.year})`;
  tagBadgeEl.textContent = track.tag;
  durationTimeEl.textContent = track.duration;

  audio.src = track.src;
  audio.load();
  updateTrackListUI(trackListContainer, currentIndex);
}

function playTrack() {
  audio.play().then(() => {
    isPlaying = true;
    playPauseBtn.innerHTML = '❚❚';
    vinylDiscEl.classList.add('spinning');
    vinylDiscEl.classList.remove('paused');
  }).catch((err) => console.warn("Playback error:", err));
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = '▶';
  vinylDiscEl.classList.add('paused');
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

playPauseBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);

shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.classList.toggle('active', isShuffle);
});

audio.addEventListener('loadedmetadata', () => {
  scrubberSlider.max = Math.floor(audio.duration || 0);
  durationTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  if (!isNaN(audio.currentTime)) {
    scrubberSlider.value = Math.floor(audio.currentTime);
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
});

scrubberSlider.addEventListener('input', () => { audio.currentTime = scrubberSlider.value; });
audio.addEventListener('ended', nextTrack);

volumeSlider.addEventListener('input', (e) => {
  const vol = parseFloat(e.target.value);
  audio.volume = vol;
  audio.muted = (vol === 0);
  volumeBtn.textContent = (vol === 0) ? '🔇' : '🔊';
});

volumeBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  volumeBtn.textContent = audio.muted ? '🔇' : '🔊';
});

playlistToggleBtn.addEventListener('click', () => drawerBackdrop.classList.add('open'));
closeDrawerBtn.addEventListener('click', () => drawerBackdrop.classList.remove('open'));
drawerBackdrop.addEventListener('click', (e) => {
  if (e.target === drawerBackdrop) drawerBackdrop.classList.remove('open');
});

window.addEventListener('keydown', (e) => {
  if (document.activeElement.tagName === 'INPUT') return;
  if (e.code === 'Space') { e.preventDefault(); togglePlay(); }
  else if (e.code === 'ArrowRight') { e.preventDefault(); nextTrack(); }
  else if (e.code === 'ArrowLeft') { e.preventDefault(); prevTrack(); }
  else if (e.code === 'KeyM') { audio.muted = !audio.muted; volumeBtn.textContent = audio.muted ? '🔇' : '🔊'; }
});

renderPlaylistDrawer(trackListContainer, () => currentIndex, (idx) => {
  loadTrack(idx);
  playTrack();
  drawerBackdrop.classList.remove('open');
});

initLiveCounter(liveCounterEl);
loadTrack(0);
