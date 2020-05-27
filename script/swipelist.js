const swipeLeft = () => {
  const firstLi = document.querySelector('li');
  firstLi.remove();
  document.querySelector('ul').insertAdjacentElement('beforeend', firstLi);
  const toLeft = () => {
    document.querySelectorAll('li').forEach((item) => {
      switch (item) {
        case document.querySelector('ul').children[0]:
          item.classList.remove('middle');
          item.classList.toggle('small');
          break;
        case document.querySelector('ul').children[1]:
          item.classList.remove('big');
          item.classList.toggle('middle');
          break;
        case document.querySelector('ul').children[2]:
          item.classList.remove('middle');
          item.classList.toggle('big');
          break;
        case document.querySelector('ul').children[3]:
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
  document.querySelector('ul').insertAdjacentElement('afterbegin', lastLi);
  const toRight = () => {
    document.querySelectorAll('li').forEach((item) => {
      switch (item) {
        case document.querySelector('ul').children[1]:
          item.classList.remove('small');
          item.classList.toggle('middle');
          break;
        case document.querySelector('ul').children[2]:
          item.classList.remove('middle');
          item.classList.toggle('big');
          break;
        case document.querySelector('ul').children[3]:
          item.classList.remove('big');
          item.classList.toggle('middle');
          break;
        case document.querySelector('ul').children[4]:
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

document.getElementById('move-left').addEventListener('click', () => swipeLeft());
document.getElementById('move-right').addEventListener('click', () => swipeRight());
