let cartItems = [];

function addToCart(product) {
    cartItems.push(product);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = cartItems.map(item => `<li>${item}</li>`).join('');
}
