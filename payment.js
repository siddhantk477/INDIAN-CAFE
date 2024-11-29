document.addEventListener("DOMContentLoaded", () => {
    const cartItems = [];
    const menu = document.getElementById("menu");
    const cartList = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total");
    const paymentSection = document.getElementById("payment");
    const cartSection = document.getElementById("cart");
    const payTotal = document.getElementById("pay-total");
    const checkoutButton = document.getElementById("checkout-button");
    const paymentForm = document.getElementById("payment-form");

    function updateCart() {
        cartList.innerHTML = ""; // Clear current cart display
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;

            // Remove item button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.style.marginLeft = "10px";
            removeButton.onclick = () => {
                removeFromCart(item.id);
            };

            li.appendChild(removeButton);
            cartList.appendChild(li);

            total += item.price * item.quantity;
        });

        totalDisplay.textContent = total.toFixed(2);
        payTotal.textContent = total.toFixed(2);
    }

    function addToCart(id, name, price) {
        const existingItem = cartItems.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ id, name, price, quantity: 1 });
        }

        updateCart();
    }

    function removeFromCart(id) {
        const itemIndex = cartItems.findIndex(item => item.id === id);

        if (itemIndex > -1) {
            cartItems[itemIndex].quantity--;

            if (cartItems[itemIndex].quantity === 0) {
                cartItems.splice(itemIndex, 1); // Remove item if quantity is 0
            }
        }

        updateCart();
    }

    menu.addEventListener("click", e => {
        if (e.target.classList.contains("add-to-cart")) {
            const item = e.target.closest(".menu-item");
            const id = parseInt(item.dataset.id, 10);
            const name = item.dataset.name;
            const price = parseFloat(item.dataset.price);

            addToCart(id, name, price);
        }
    });

    checkoutButton.addEventListener("click", () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty!");
        } else {
            cartSection.classList.add("hidden");
            paymentSection.classList.remove("hidden");
        }
    });

    paymentForm.addEventListener("submit", e => {
        e.preventDefault();

        alert(`Payment successful! Thank you for your order of ₹${payTotal.textContent}.`);
        
        cartItems.length = 0; // Clear the cart
        updateCart();

        paymentSection.classList.add("hidden");
        cartSection.classList.remove("hidden");
    });
});