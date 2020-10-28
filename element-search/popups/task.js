document.getElementById('modal_main').className = 'modal_active';

for (let i = 0; i < 2; i++) {
	document.getElementsByClassName('modal__close_times')[i].onclick = closeWindow;
}

const btnDanger = document.getElementsByClassName('show-success')[0];
btnDanger.addEventListener('click', () => document.getElementById('modal_success').className = 'modal_active');
btnDanger.addEventListener('click', closeWindow);

function closeWindow() {
	this.closest('.modal_active').className = 'modal';
}