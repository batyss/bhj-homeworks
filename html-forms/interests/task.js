const interestItems = document.querySelectorAll('.interest__check');
for (item of interestItems) {
	item.addEventListener('change', chooseInterest);
}

function chooseInterest() {
	const interestsGroup = this.closest('.interest').getElementsByTagName('input');
	if (this.checked) {
		for (item of interestsGroup) {
			item.checked = true;
		}	
	} else if (!this.checked) {
		for (item of interestsGroup) {
			item.checked = false;	
		}	
	}
}