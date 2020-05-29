import { LIST, FULLSCREEN_BTN, HERO_IMG, HERO_NAME, HERO_INFO, HEROES } from './constants.js';

LIST.onclick = event => {
  if (event.target.tagName === 'BUTTON') {
    const heroID = event.target.id;
    HERO_NAME.innerText = HEROES[`${heroID}`].name;
    HERO_IMG.setAttribute('alt', 'hero');
    HERO_IMG.setAttribute('src', HEROES[`${heroID}`].img);
    FULLSCREEN_BTN.removeAttribute('hidden');
    FULLSCREEN_BTN.innerText = 'Open image in fullscreen';
    HERO_INFO.innerText = HEROES[`${heroID}`].info;
  }
};