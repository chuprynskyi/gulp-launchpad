// /*---------- Animate fadeInUp --------------*/

const sectionQuestion = document.querySelector('.section__question');
const question = document.querySelector('.section__question>h2');

const sectionSupport = document.querySelector('.section__support');

const footerLogo = document.querySelector('.footer__logo');
const footerTitle = document.querySelectorAll('.footer__list-title');
const footerLink = document.querySelectorAll('.footer__link');
const copy = document.querySelector('.copy');

window.addEventListener('scroll', () => {

  if (document.documentElement.scrollTop > 200) {
    sectionQuestion.classList.add('visible');
    question.classList.add('animate__fadeInUp');
  }

  if (document.documentElement.scrollTop > 2650) {
    sectionSupport.classList.add('visible');
    sectionSupport.classList.add('animate__fadeInUp');
  }

  if (document.documentElement.scrollTop > 3420) {
    footerLogo.classList.add('visible');
    footerLogo.classList.add('animate__fadeInUp');

    footerTitle.forEach((item) => {
      item.classList.add('visible');
      item.classList.add('animate__fadeInUp');
    });
  }

  if (document.documentElement.scrollTop > 3550) {
    footerLink.forEach((item) => {
      item.classList.add('visible');
      item.classList.add('animate__animated');
      item.classList.add('animate__fadeInUp');
    });
  }

   if (document.documentElement.scrollTop > 3700) {
     copy.classList.add('visible');
     copy.classList.add('animate__animated');
     copy.classList.add('animate__fadeInUp');
   }
   
});
