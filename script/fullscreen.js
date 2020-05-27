const toFullScreen = () => {
  document.querySelector('img[class*="hero-img"]').requestFullscreen();
};
document.addEventListener('fullscreenchange', toFullScreen);
document.querySelector('button[class*="fullscreen-btn"]').addEventListener('click', () => toFullScreen());
