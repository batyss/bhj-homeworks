const cookie = document.getElementById('cookie');
let counter = +document.getElementById('clicker__counter').textContent;
let lastTime = new Date;

function countClicks() {	
	let currentTime = new Date;
	cookie.width = 250;
	 counter = counter + 1;
	 clicker__counter.textContent = counter;
	setTimeout(returnSizes, 70);
	
	let speedClick = (1/((currentTime - lastTime)*1000)).toFixed(2);
	speed__counter.textContent = speedClick;
	//console.log(speedClick);
	lastTime = currentTime;
}

function returnSizes() {
	cookie.width = 200;
}

cookie.onclick = countClicks;
