const refs = document.querySelectorAll('.has-tooltip');
for (item of refs) {
	item.addEventListener('click', showTooltip);
	item.insertAdjacentHTML('afterend', `<div class="tooltip">${item.title}</div>`)
}

function showTooltip(event) {
	event.preventDefault();
	const toolTips = document.querySelectorAll('.tooltip');
	for (item of toolTips) {
		item.classList.remove('tooltip_active');
	}
	let currTooltip = event.target.nextElementSibling;
	currTooltip.classList.add('tooltip_active');
	currTooltip.style = `top: ${event.target.getBoundingClientRect().top + 18}px; left: ${event.target.getBoundingClientRect().left}px`;
}