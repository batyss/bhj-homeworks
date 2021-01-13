const toolTip = document.createElement('div');
toolTip.classList.add('tooltip');
const refs = document.querySelectorAll('.has-tooltip');
for (item of refs) {
	item.addEventListener('click', showTooltip);
}

function showTooltip() {
	event.preventDefault();
	if ((toolTip.textContent === this.title) && document.querySelector ('.tooltip_active')) {
		toolTip.classList.remove('tooltip_active');
		return;
	}
	this.insertAdjacentElement('afterend', toolTip);
	toolTip.textContent = `${this.title}`;
	toolTip.style = `top: ${this.getBoundingClientRect().top + 18}px; left: ${this.getBoundingClientRect().left + 3}px`;
	toolTip.classList.add('tooltip_active');	
}