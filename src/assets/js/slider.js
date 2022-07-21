/*---------- Slider -------------*/

const first = document.querySelector('.first-box');
const second = document.querySelector('.second-box');
const last = document.querySelector('.last-box');

first.addEventListener('click', function (event) {
	// console.log(event.target);

  if (event.target.closest('.prev')) {
    first.classList.remove('prev');
    second.classList.add('next');
    last.classList.remove('next');
    last.classList.add('next__after');
  }
  if (event.target.closest('.prev__after')) {
    first.classList.remove('prev__after');
    second.classList.remove('prev');
    second.classList.add('next');
    last.classList.add('next__after');
  }

  if (event.target.closest('.arrow__next')) {
    first.classList.add('prev');
    second.classList.remove('next');
    last.classList.remove('next__after');
    last.classList.add('next');
  }
});

second.addEventListener('click', function (event) {
  if (event.target.closest('.next')) {
    first.classList.add('prev');
    second.classList.remove('next');
    last.classList.remove('next__after');
    last.classList.add('next');
  }
  if (event.target.closest('.prev')) {
    first.classList.remove('prev__after');
    first.classList.add('prev');
    second.classList.remove('prev');
    last.classList.add('next');
  }

  if (event.target.closest('.arrow__prev')) {
    first.classList.remove('prev');
    second.classList.add('next');
    last.classList.remove('next');
    last.classList.add('next__after');
  }
  if (event.target.closest('.arrow__next')) {
    first.classList.remove('prev');
    first.classList.add('prev__after');
    second.classList.add('prev');
    last.classList.remove('next');
  }
});

last.addEventListener('click', function (event) {
  if (event.target.closest('.next')) {
    first.classList.remove('prev');
    first.classList.add('prev__after');
    second.classList.add('prev');
    last.classList.remove('next');
  }
  if (event.target.closest('.next__after')) {
    first.classList.add('prev__after');
    second.classList.remove('next');
    second.classList.add('prev');
    last.classList.remove('next__after');
  }

  if (event.target.closest('.arrow__prev')) {
    first.classList.remove('prev__after');
    first.classList.add('prev');
    second.classList.remove('prev');
    last.classList.add('next');
  }
});
