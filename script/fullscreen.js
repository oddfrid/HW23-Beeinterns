import { FULLSCREEN_BTN, HERO_IMG } from './constants.js';

const toFullScreen = () => {
  HERO_IMG.requestFullscreen();
};
document.addEventListener('fullscreenchange', toFullScreen);
document.removeEventListener('fullscreenchange', toFullScreen);
FULLSCREEN_BTN.addEventListener('click', () => toFullScreen());
FULLSCREEN_BTN.removeEventListener('click', () => toFullScreen());
