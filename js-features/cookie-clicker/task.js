const cookie = document.getElementById('cookie');
let counter = +document.getElementById('clicker__counter').textContent;
let lastTime = 0;
let currentTime;

function countClicks() {	
	currentTime = new Date;
	cookie.width = 250;
	counter += 1;
	clicker__counter.textContent = counter;
	setTimeout(returnSizes, 70);
	countSpeed();
	lastTime = currentTime;
}

returnSizes = () => {cookie.width = 200};

countSpeed = () => {speed__counter.textContent = (1/((currentTime - lastTime)/1000)).toFixed(2)};

cookie.onclick = countClicks;