const changeFullScreenBtn = () => {
  document.querySelector('button[class*="fullscreen-btn"]').innerText = 'CLICK HERE!';
};
const returnFullScreenBtn = () => {
  document.querySelector('button[class*="fullscreen-btn"]').innerText = 'Open image in fullscreen';
};

document.querySelector('button[class*="fullscreen-btn"]').addEventListener('mouseover', () => changeFullScreenBtn());
document.querySelector('button[class*="fullscreen-btn"]').addEventListener('mouseout', () => returnFullScreenBtn());
