const btns = document.querySelectorAll('.font-size');

for (btn of btns) {
	btn.addEventListener('click', changeOption);
}

function changeOption(evt) {
	
	evt.preventDefault();
	this.closest('.book').classList.remove('book_fs-small','book_fs-big');
	
	for (let i = 0; i < btns.length; i++) {
		btns[i].classList.remove('font-size_active');
	}
	
	this.classList.add('font-size_active');
	let currOption = document.querySelector('.font-size_active');
	
	if (currOption.classList.contains('font-size_small')) {
		this.closest('.book').classList.add('book_fs-small');
	} else if (currOption.classList.contains('font-size_big')) {
		this.closest('.book').classList.add('book_fs-big');
	}
}