const leftArrow = document.querySelector('.slider__arrow_prev');
const rightArrow = document.querySelector('.slider__arrow_next');
let q = document.querySelectorAll('.slider__item').length;
const dots = document.getElementsByClassName('slider__dot');
let n = 0;

leftArrow.onclick = pushPrev;
rightArrow.onclick = pushNext;

function pushPrev() {
	let currentSlide = document.querySelector('.slider__item_active');
	currentSlide.classList.remove('slider__item_active');
	if (n === 0) {
		n = q;
	}
	dots[n - 1].onclick();
	let previousSlide = document.getElementsByClassName('slider__item')[n -= 1];
		previousSlide.classList.add('slider__item_active');
}

function pushNext() {
	let currentSlide = document.querySelector('.slider__item_active');
	currentSlide.classList.remove('slider__item_active');
	if (n === q - 1) {
		n = -1;
	}
	dots[n + 1].onclick();
	let nextSlide = document.getElementsByClassName('slider__item')[n += 1];
	nextSlide.classList.add('slider__item_active');
}

for (let i = 0; i < dots.length; i++) {
	dots[i].onclick = pushDot;
	//dots[i].addEventListener('click', pushDot);
	//dots[i].addEventListener('click', changeSlide);
}

function pushDot() {
	for (let i = 0; i < dots.length; i++) {
	dots[i].classList.remove('slider__dot_active');
	}
	this.classList.add('slider__dot_active');
}

//function changeSlide() {}