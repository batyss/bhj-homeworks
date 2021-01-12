const toolTip = document.createElement('div');
toolTip.classList.add('tooltip');
const refs = document.querySelectorAll('.has-tooltip');
for (item of refs) {
	item.addEventListener('click', showTooltip);
}

function showTooltip() {
	event.preventDefault();
	toolTip.classList.toggle('tooltip_active');
	if (document.querySelector('.tooltip') !== this.nextElementSibling) {
		this.insertAdjacentElement('afterend', toolTip);
		toolTip.textContent = `${this.title}`;
		toolTip.style = `top: ${this.getBoundingClientRect().top + 18}px; left: ${this.getBoundingClientRect().left + 3}px`;
		toolTip.classList.add('tooltip_active');
	} 	
}	