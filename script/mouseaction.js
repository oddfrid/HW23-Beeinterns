import { FULLSCREEN_BTN } from './constants.js';

const changeFullScreenBtn = () => {
  FULLSCREEN_BTN.innerText = 'CLICK HERE!';
};
const returnFullScreenBtn = () => {
  FULLSCREEN_BTN.innerText = 'Open image in fullscreen';
};

FULLSCREEN_BTN.addEventListener('mouseover', () => changeFullScreenBtn());
FULLSCREEN_BTN.removeEventListener('mouseover', () => changeFullScreenBtn());
FULLSCREEN_BTN.addEventListener('mouseout', () => returnFullScreenBtn());
FULLSCREEN_BTN.removeEventListener('mouseout', () => returnFullScreenBtn());
