getHole = index => document.getElementById(`hole${index}`);

for (i = 1; i < 10; i++) {
	getHole(i).onclick = shot;
}

let mole = 0;
let miss = 0;

function shot() {
	if (this.className.includes('hole_has-mole')) {
		mole += 1;
		document.getElementById(`dead`).textContent = mole;
		if (mole === 10) {
			alert ('Победа!');
			resetCounters();
		}
	} else {
		miss += 1;
		document.getElementById(`lost`).textContent = miss;
		if (miss === 5) {
			alert ('Вы проиграли(');
 			resetCounters();
		}
	}
}

function resetCounters() {
	mole = 0;
 	miss = 0;
 	document.getElementById(`dead`).textContent = mole;
 	document.getElementById(`lost`).textContent = miss;
}