let currentValue;

function countDown() {
	currentValue = document.getElementById('timer').textContent;
	if (+currentValue === 0) {
		clearInterval(counter);
		alert ('Вы победили в конкурсе!');
		return;	
	}
	timer.textContent = String(+currentValue - 1);
}

const counter = setInterval(countDown, 1000);


//*1
currentValue = document.getElementById('timer').textContent;
//let currentFullValue = new Date(0, 0, 0, 0, 0, +currentValue, 0); - не разобралась, как дальше вычитать и сравнивать секунды
//timer.textContent = currentFullValue.toTimeString().slice(0,  7); - поэтому шаблонные строки
timer.textContent = `00:00:${currentValue}`;

function fullCountDown() {
	let currentFullValue = document.getElementById('timer').textContent;
	let a = +(currentFullValue.substring(6, 8));
	if (a === 0) {
		clearInterval(fullCounter);
		alert ('Вы победили в конкурсе!');
		return;	
	} else if (a <= 10) {
		timer.textContent = `00:00:0${String(a - 1)}`;
	}  else {
	timer.textContent = `00:00:${String(a - 1)}`;
	}
}
const fullCounter = setInterval(fullCountDown, 1000);