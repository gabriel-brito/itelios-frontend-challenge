const url = 'https://nothing-special-2d3c2.firebaseio.com/0.json';
const visitedContainer = document.querySelector('#visited');
const recommendationContainer = document.querySelector('#recommendation');

function renderRecommendations(container, data){
	container.innerHTML += `
		<div class="product-item">
			<img src="https://github.com/iteliosbrasil/itelios-frontend-challenge/blob/master/images/Mac-Mini-Apple-MGEN2BZ-A-com-Intel-Core-i5-Dual-Core-8GB-1TB-Leitor-de-Cartoes-HDMI-Wireless-AC-Bluetooth-4-0-e-OS-X-Yosemite-3865616.jpg?raw=true">
			<p>${data.name}</p>
			<p>por <span>${data.price}</span></p>
			<p>${data.productInfo.paymentConditions}</p>
			<div class="cart">
				<a href="#">adicionar ao carrinho</a>
			</div>
		</div>
	`;
}

function renderProduct(container, data){
	container.innerHTML = `
		<div class="product-item">
			<img src="https://github.com/iteliosbrasil/itelios-frontend-challenge/blob/master/images/Mac-Mini-Apple-MGEN2BZ-A-com-Intel-Core-i5-Dual-Core-8GB-1TB-Leitor-de-Cartoes-HDMI-Wireless-AC-Bluetooth-4-0-e-OS-X-Yosemite-3865616.jpg?raw=true">
			<p>${data.name}</p>
			<p>por <span>${data.price}</span></p>
			<p>${data.productInfo.paymentConditions}</p>
			<div class="cart">
				<a href="#">adicionar ao carrinho</a>
			</div>
		</div>
	`;
}

function fetchProduct(url){
	fetch(url)
    .then(res => res.json())
    .then(res => res.data)
    .then(product => {
    	console.log(product);
    	let content = product.item;
    	renderProduct(visitedContainer, content);
    	product.recommendation.map(item => {
    		renderRecommendations(recommendationContainer, item);
    	})
	});
}


window.onload = fetchProduct(url);