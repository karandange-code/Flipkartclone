// ===============================
// 1. LOGIN BUTTON
// ===============================

const loginButton = document.querySelector(".button button");

loginButton.addEventListener("click", function () {
    alert("Welcome to Flipkart Clone! 🛍️");
});


// ===============================
// 2. SEARCH FUNCTION
// ===============================

const searchInput = document.querySelector(".search input");
const products = document.querySelectorAll(".productsection > div");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase().trim();

    products.forEach(function (product) {

        const productName = product.querySelector("h3");

        if (productName) {

            const name = productName.innerText.toLowerCase();

            if (name.includes(searchText)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        }

    });

});


// ===============================
// 3. PRODUCT DATA
// ===============================

const productData = [
    {
        name: "Smart Phone",
        price: 15999
    },
    {
        name: "Watch",
        price: 2999
    },
    {
        name: "Laptop",
        price: 19999
    },
    {
        name: "Headphone",
        price: 3999
    }
];


// ===============================
// 4. CART
// ===============================

let cartItems = [];


// ===============================
// 5. CREATE CART COUNT
// ===============================

const cart = document.querySelector(".cart");

const cartCount = document.createElement("span");

cartCount.innerText = "0";
cartCount.style.marginLeft = "5px";
cartCount.style.background = "red";
cartCount.style.color = "white";
cartCount.style.padding = "2px 7px";
cartCount.style.borderRadius = "50%";
cartCount.style.fontSize = "12px";

cart.appendChild(cartCount);


// ===============================
// 6. ADD TO CART BUTTON
// ===============================

const productButtons =
    document.querySelectorAll(".productsection button");

productButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        const product = productData[index];

        const existingProduct = cartItems.find(function (item) {
            return item.name === product.name;
        });

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cartItems.push({
                name: product.name,
                price: product.price,
                quantity: 1
            });

        }

        updateCartCount();

        showMessage(product.name + " added to cart 🛒");

    });

});


// ===============================
// 7. UPDATE CART COUNT
// ===============================

function updateCartCount() {

    let totalQuantity = 0;

    cartItems.forEach(function (item) {
        totalQuantity += item.quantity;
    });

    cartCount.innerText = totalQuantity;
}


// ===============================
// 8. SHOW MESSAGE
// ===============================

function showMessage(message) {

    const notification = document.createElement("div");

    notification.innerText = message;

    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.background = "#2874f0";
    notification.style.color = "white";
    notification.style.padding = "12px 20px";
    notification.style.borderRadius = "5px";
    notification.style.zIndex = "9999";

    document.body.appendChild(notification);

    setTimeout(function () {
        notification.remove();
    }, 2000);
}


// ===============================
// 9. CART CLICK
// ===============================

cart.addEventListener("click", function () {

    if (cartItems.length === 0) {

        alert("Your cart is currently empty 🛒");

        return;
    }

    showCart();

});


// ===============================
// 10. SHOW CART
// ===============================

function showCart() {

    let cartMessage = "🛒 YOUR CART\n\n";

    let total = 0;

    cartItems.forEach(function (item, index) {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        cartMessage +=
            `${index + 1}. ${item.name}
Price: ₹${item.price}
Quantity: ${item.quantity}
Total: ₹${itemTotal}

`;

    });

    cartMessage +=
        `----------------------
Grand Total: ₹${total}`;

    alert(cartMessage);
}


// ===============================
// 11. VIEW PRODUCT
// ===============================

productButtons.forEach(function (button, index) {

    button.addEventListener("contextmenu", function (event) {

        event.preventDefault();

    });

});


// ===============================
// 12. CLEAR CART
// ===============================

const clearCartButton = document.createElement("button");

clearCartButton.innerText = "Clear Cart";

clearCartButton.style.marginLeft = "15px";
clearCartButton.style.padding = "8px 15px";
clearCartButton.style.cursor = "pointer";

document.querySelector("header").appendChild(clearCartButton);

clearCartButton.addEventListener("click", function () {

    if (cartItems.length === 0) {

        alert("Cart is already empty.");

        return;
    }

    cartItems = [];

    updateCartCount();

    showMessage("Cart cleared successfully 🗑️");

});


// ===============================
// 13. WISHLIST
// ===============================

products.forEach(function (product) {

    const wishlistButton = document.createElement("button");

    wishlistButton.innerText = "♡ Wishlist";

    wishlistButton.style.marginLeft = "5px";
    wishlistButton.style.cursor = "pointer";

    product.appendChild(wishlistButton);

    wishlistButton.addEventListener("click", function () {

        if (wishlistButton.innerText === "♡ Wishlist") {

            wishlistButton.innerText = "❤️ Added";

            showMessage("Added to wishlist ❤️");

        } else {

            wishlistButton.innerText = "♡ Wishlist";

            showMessage("Removed from wishlist");

        }

    });

});


// ===============================
// 14. ENTER KEY SEARCH
// ===============================

searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const searchValue = searchInput.value.trim();

        if (searchValue === "") {

            showMessage("Please enter a product name");

        } else {

            showMessage("Searching for: " + searchValue);

        }

    }

});