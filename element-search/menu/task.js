const links = document.getElementsByClassName('menu__link');

for (let i = 0; i < links.length; i++) {
	links[i].onclick = pushMenu;
}

function pushMenu(event) {
	if (this.nextElementSibling.className.includes('menu_sub')) {
		if (this.nextElementSibling.classList.contains('menu_active')) {
			this.nextElementSibling.classList.remove('menu_active');
			event.preventDefault();
			return;
		} else if (document.querySelector('.menu_sub.menu_active')) {
			//document.querySelector('.menu_sub.menu_active').classList.remove('menu_active'); // кажется, можно без цикла вовсе
			let openedMenu = document.querySelectorAll('.menu_sub.menu_active');
			for (let i = 0; i < openedMenu.length; i++) {
				openedMenu[i].classList.remove('menu_active');
			}
		}	
		event.preventDefault();
		this.nextElementSibling.classList.add('menu_active');
	}	
}