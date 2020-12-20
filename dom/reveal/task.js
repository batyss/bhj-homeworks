const blocks = document.querySelectorAll('.reveal');
const viewportHeight = window.innerHeight;

window.addEventListener('scroll', letsReveal);

function letsReveal() {
	for (let i = 0; i < blocks.length; i++) {
		let currTop = blocks[i].getBoundingClientRect().top;
		if (currTop <= viewportHeight &&  currTop > 0) {
		blocks[i].classList.add('reveal_active')};
	}
}