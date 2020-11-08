const leftArrow = document.querySelector('.slider__arrow_prev');
const rightArrow = document.querySelector('.slider__arrow_next');
const slides = document.querySelectorAll('.slider__item');
const dots = document.getElementsByClassName('slider__dot');
const Dots = Array.from(dots);
let q = slides.length;
let n = 0;

leftArrow.onclick = pushPrev;
rightArrow.onclick = pushNext;

for (let i = 0; i < dots.length; i++) {
	dots[i].onclick = pushDot;
}

getActive(n);

function getActive() {
	slides[n].classList.add('slider__item_active');
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('slider__dot_active');
	}
	dots[n].classList.add('slider__dot_active');
}

function pushPrev() {
	slides[n].classList.remove('slider__item_active');
	if (n === 0) {
		n = q;
	}
	getActive(n -= 1);
}

function pushNext() {
	slides[n].classList.remove('slider__item_active');
	if (n === q - 1) {
		n = -1;
	}
	getActive(n += 1);
}

function pushDot(event) {
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('slider__dot_active');
	}
	event.currentTarget.classList.add('slider__dot_active');
	slides[n].classList.remove('slider__item_active');
	n = Dots.findIndex(isActiveDot);
	slides[n].classList.add('slider__item_active');
}

function isActiveDot(element, index, Dots) {
	return element.classList.contains('slider__dot_active');
}