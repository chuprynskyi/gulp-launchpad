/*---------------- Scroll --------------*/

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const last = document.querySelector('.last');

const text = document.querySelector('.scroll__text');

const firstImg = document.querySelector('.scroll__img img:first-child');
const secondImg = document.querySelector('.scroll__img img:nth-child(2)');
const lastImg = document.querySelector('.scroll__img img:last-child');

const scrollVertical = document.querySelector('.scroll__vertical');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop < 1299) {
    first.classList.remove('small');
    second.classList.add('small');

    text.classList.remove('t0');

    firstImg.classList.add('displayed');
    scrollVertical.classList.remove('t0');
  }
  if (
    document.documentElement.scrollTop > 1300 &&
    document.documentElement.scrollTop < 1999
  ) {
    first.classList.add('small');
    second.classList.remove('small');
    last.classList.add('small');

    text.classList.remove('t-24');
    text.classList.add('t0');

    firstImg.classList.remove('displayed');
    secondImg.classList.add('displayed');
    
    scrollVertical.classList.remove('t-34');
    scrollVertical.classList.add('t0');
  }
  if (document.documentElement.scrollTop > 2000) {
    second.classList.add('small');
    last.classList.remove('small');

    text.classList.add('t-24');

    secondImg.classList.remove('displayed');
    lastImg.classList.add('displayed');
    
    scrollVertical.classList.remove('t0');
    scrollVertical.classList.add('t-34');
  }
});
