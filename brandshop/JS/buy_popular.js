var cart = {};

$('document').ready(function(){
  loadPopular();
  checkCart();
  showMiniCart();
});

function loadPopular() {
	//загрзука товаров
	$.getJSON('JS/popular.json', function( data ) {
	var items = '';
	for (var key in data){
		items+='<div class="product">';
		items+='<img class="product-photo" src="'+data[key].image+'">';
		items+='<div class="product-buy">';
		items+='<img data-art="'+key+'" class="product-buy-button" src="images/add_to_cart.png">';
		items+='</div>';
		items+='<div class="product-header">';
		items+='<h3 class="product-title">'+data[key]['name']+'</h3>';
		items+='<span class="product-price">'+data[key]['currency']+data[key]['price'].toFixed(2)+'</span>';
		items+='</div>';
		items+='</div>';
	}
	$('.product-section').html(items);
	$('.product-buy-button').on('click', addToCart);
});
}

function addToCart() {
	//добавление товара
	var articul = $(this).attr('data-art');
	if (cart[articul] !=undefined) {
		cart[articul]++;
	}
	else {
		cart[articul] = 1;
	}
	localStorage.setItem('cart', JSON.stringify(cart) );
	showMiniCart();
}

function checkCart() {
	//проверка наличия товаров в корзине
	if ( localStorage.getItem('cart') != null) {
		cart = JSON.parse (localStorage.getItem('cart'));
	}
}

function showMiniCart() {
	//содержимое корзины
	var items ='';
	for (var w in cart) {
		items += w + ' ' +cart[w]+'<br>';
	}
	$('.account_cart').html(items);
}

