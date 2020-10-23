getHole = index => document.getElementById(`hole${index}`);

let mole = 0;
let miss = 0;

function shot() {
	if (this.className.includes('hole_has-mole')) {
			mole += 1;
		} else {
			miss += 1;
		};
}

for (i = 1; i < 10; i++) {
	getHole(i).onclick = shot;
}

if (mole === 10 || miss === 5) {
	mole = 0;
 	miss = 0;
}