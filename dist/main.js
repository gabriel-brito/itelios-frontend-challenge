'use strict';

var url = 'https://nothing-special-2d3c2.firebaseio.com/0.json';
var visitedContainer = document.querySelector('#visited');
var recommendationContainer = document.querySelector('#recommendation');

function renderRecommendations(container, data) {
	container.innerHTML += '\n\t\t<div class="product-item">\n\t\t\t<img src="https://github.com/iteliosbrasil/itelios-frontend-challenge/blob/master/images/apple-macbook-air-13-i5-16ghz-8gb-128gb-ssd-mmgf2-11549005.jpg?raw=true">\n\t\t\t<p>' + data.name + '</p>\n\t\t\t<p>por <span>' + data.price + '</span></p>\n\t\t\t<p>' + data.productInfo.paymentConditions + '</p>\n\t\t\t<div class="cart">\n\t\t\t\t<a href="#">adicionar ao carrinho</a>\n\t\t\t</div>\n\t\t</div>\n\t';
}

function renderProduct(container, data) {
	container.innerHTML = '\n\t\t<div class="product-item">\n\t\t\t<img src="https://github.com/iteliosbrasil/itelios-frontend-challenge/blob/master/images/apple-macbook-air-13-i5-16ghz-8gb-128gb-ssd-mmgf2-11549005.jpg?raw=true">\n\t\t\t<p>' + data.name + '</p>\n\t\t\t<p>por <span>' + data.price + '</span></p>\n\t\t\t<p>' + data.productInfo.paymentConditions + '</p>\n\t\t\t<div class="cart">\n\t\t\t\t<a href="#">adicionar ao carrinho</a>\n\t\t\t</div>\n\t\t</div>\n\t';
}

function fetchProduct(url) {
	fetch(url).then(function (res) {
		return res.json();
	}).then(function (res) {
		return res.data;
	}).then(function (product) {
		var content = product.item;
		console.log('Hello!');
		renderProduct(visitedContainer, content);
		product.recommendation.map(function (item) {
			renderRecommendations(recommendationContainer, item);
		});
	});
}

window.onload = fetchProduct(url);