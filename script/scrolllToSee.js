import { ABOUT__HERO } from './constants.js';

const changeOpacity = () => {
  ABOUT__HERO.style.opacity = 1;
};

window.addEventListener('scroll', () => changeOpacity());
window.removeEventListener('scroll', () => changeOpacity());
