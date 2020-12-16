const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', tumbler);
}

function tumbler() {
	for (let j = 0; j < tabs.length; j++) {
		tabs[j].classList.remove('tab_active');
		contents[j].classList.remove('tab__content_active');
	}
	
	this.classList.add('tab_active');
	let currIndex = Array.from(tabs).indexOf(document.querySelector('.tab_active'));
	contents[currIndex].classList.add('tab__content_active');
}