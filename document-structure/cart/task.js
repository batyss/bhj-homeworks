const products = document.querySelectorAll('.product');
for (item of products) {
	item.querySelector('.product__quantity-control_dec').addEventListener('click', reduceQty);
	item.querySelector('.product__quantity-control_inc').addEventListener('click', addQty);
	item.querySelector('.product__add').addEventListener('click', addToCart);
}
const productsCart = document.querySelector('.cart__products');

function reduceQty() {
	if (+this.nextElementSibling.textContent > 1) {
		this.nextElementSibling.textContent = +this.nextElementSibling.textContent - 1;
	}
}

function addQty() {
	this.previousElementSibling.textContent = +this.previousElementSibling.textContent + 1;
}

function addToCart() {
	const addedProducts = document.querySelectorAll('.cart__product');
	const currId = this.closest('.product').getAttribute('data-id');
	const currQty = +this.closest('.product').querySelector('.product__quantity-value').textContent;

	for (item of addedProducts) {
		if (item.getAttribute('data-id') === currId) {
			let currCartQty = +item.querySelector('.cart__product-count').textContent;
			item.querySelector('.cart__product-count').textContent = `${currCartQty + currQty}`;
			return;
		} 	
	}
	
	productsCart.insertAdjacentHTML('afterbegin', 
		`<div class="cart__product" data-id=${currId}>
    		<img class="cart__product-image" src=${this.closest('.product').querySelector('.product__image').src}>
    		<div class="cart__product-count">${currQty}</div>
    	</div>`)
}