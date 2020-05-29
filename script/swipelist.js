import { LIST } from './constants.js';

const swipeLeft = () => {
    const firstLi = document.querySelector('li');
    firstLi.remove();
    LIST.insertAdjacentElement('beforeend', firstLi);
    const toLeft = () => {
      document.querySelectorAll('li').forEach((item) => {
        switch (item) {
          case LIST.children[0]:
            item.classList.remove('middle');
            item.classList.toggle('small');
            break;
          case LIST.children[1]:
            item.classList.remove('big');
            item.classList.toggle('middle');
            break;
          case LIST.children[2]:
            item.classList.remove('middle');
            item.classList.toggle('big');
            break;
          case LIST.children[3]:
            item.classList.remove('small');
            item.classList.toggle('middle');
            break;
          default:
            break;
        }
      });
    };
    toLeft();
};

const swipeRight = () => {
  const lastLi = document.querySelector('li:last-child');
  lastLi.remove();
  LIST.insertAdjacentElement('afterbegin', lastLi);
  const toRight = () => {
    document.querySelectorAll('li').forEach((item) => {
      switch (item) {
        case LIST.children[1]:
          item.classList.remove('small');
          item.classList.toggle('middle');
          break;
        case LIST.children[2]:
          item.classList.remove('middle');
          item.classList.toggle('big');
          break;
        case LIST.children[3]:
          item.classList.remove('big');
          item.classList.toggle('middle');
          break;
        case LIST.children[4]:
          item.classList.remove('middle');
          item.classList.toggle('small');
          break;
        default:
          break;
      }
    });
  };
  toRight();
};
document.onkeydown = event => {
  if (event.key === 'ArrowLeft')
    swipeLeft();
  else if (event.key === 'ArrowRight')
    swipeRight();
}
const MOVE_LEFT = document.querySelector('#move-left');
MOVE_LEFT.addEventListener('click', () => swipeLeft());
MOVE_LEFT.removeEventListener('click', () => swipeLeft());

const MOVE_RIGHT = document.querySelector('#move-right');
MOVE_RIGHT.addEventListener('click', () => swipeRight());
MOVE_RIGHT.removeEventListener('click', () => swipeRight());
