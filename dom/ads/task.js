let speed = 1000;
let timerId = setInterval(changeAds, speed);
const rotators = document.querySelectorAll('.rotator');
let ads;
let currAd;


function changeAds() {
	
	for (rotator of rotators) {
		ads = rotator.children;
		currAd = rotator.querySelector('.rotator__case_active');
		currAd.style.color = currAd.dataset.color;
			
	if (Array.from(ads).indexOf(currAd) === ads.length - 1) {
		currAd.classList.remove('rotator__case_active')
		ads[0].classList.add('rotator__case_active');
		ads[0].style.color = ads[0].dataset.color;
	} else {
		currAd.classList.remove('rotator__case_active')
		currAd.nextElementSibling.classList.add('rotator__case_active');
		currAd.nextElementSibling.style.color = currAd.nextElementSibling.dataset.color;
	}
	
	currAd = rotator.querySelector('.rotator__case_active');
	}
	
	clearInterval(timerId);
	speed = currAd.dataset.speed;
	timerId = setInterval(changeAds, speed);
}