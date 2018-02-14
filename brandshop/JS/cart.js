var cart = {}; //корзина

$.getJSON('JS/popular.json', function(data){
	var items = data; //товары в массиве
	checkCart();
	showCart(); //вывод товара на страницу
	
	function showCart() {
		var ShowIt = '';
		for (var key in cart) {
			ShowIt += '<button class="delete">x</button>';
			ShowIt += '<img src = "'+items[key].image+'">';
			ShowIt += items[key].name;
			ShowIt += '<button class="minus">-</button>';
			ShowIt += cart[key];
			ShowIt += '<button class="plus" data-art="'+key+'">+</button>';
			ShowIt += items[key].currency;
			ShowIt += cart[key]*items[key].price;
			ShowIt += '<br>';
		}
		$('.my_cart').html(ShowIt);
		$('.plus').on('click', plusItems);
	}

	function plusItems() {
		var articul = $(this).attr('data-art');
		cart[articul]++;
		showCart();
	}
})

function checkCart() {
	//проверка наличия товаров в корзине
	if ( localStorage.getItem('cart') != null) {
		cart = JSON.parse (localStorage.getItem('cart'));
	}
}
