const btns = document.querySelectorAll('.dropdown__value');

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', dropDown);
}

function dropDown() {
	this.nextElementSibling.classList.toggle('dropdown__list_active');
}

const options = document.querySelectorAll('.dropdown__link');

for (let i = 0; i < options.length; i++) {
	options[i].addEventListener('click', chooseOption);
	options[i].addEventListener('click', closeList);
}

function chooseOption(event) {
	this.closest('.dropdown__list').previousElementSibling.textContent = this.textContent.trim();
	event.preventDefault();
}

function closeList(event) {
	this.closest('.dropdown__list').classList.remove('dropdown__list_active');
	event.preventDefault();
}