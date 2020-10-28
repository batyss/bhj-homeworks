const links = document.getElementsByClassName('menu__link');

for (let i = 0; i < links.length; i++) {
	links[i].onclick = pushMenu;
}

function pushMenu() {
	if (this.nextElementSibling.className.includes('menu_sub')) {
		if (document.querySelector('.menu_active')) { //.querySelector('.menu_sub .menu_active') не работает
		let openedMenu = document.querySelectorAll('.menu_sub');
		for (let i = 0; i < openedMenu.length; i++) {
			openedMenu[i].classList.remove('menu_active');
		}
		}	
		this.nextElementSibling.classList.add('menu_active');
		this.onclick = this.classList.remove('menu_active');
		return false;
	}
}

