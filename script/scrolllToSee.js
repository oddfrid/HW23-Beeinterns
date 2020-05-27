const changeOpacity = () => {
  document.querySelector('article[class="about__hero"]').style.opacity = 1;
};

window.addEventListener('scroll', () => changeOpacity());
