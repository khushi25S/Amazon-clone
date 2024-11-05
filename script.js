document.addEventListener('DOMContentLoaded', function () {
    let cartItems = [];

    // Get all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartIcon = document.querySelector('.nav-cart');
    const cartCount = document.createElement('span');
    cartCount.classList.add('cart-count');
    cartCount.style.marginLeft = '5px';
    cartIcon.appendChild(cartCount);
    updateCartCount();

    // Add event listeners to all Add to Cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const item = e.target.getAttribute('data-item');
            const price = parseFloat(e.target.getAttribute('data-price'));

            // Add the item to the cart
            addToCart(item, price);
        });
    });

    // Add item to the cart array
    function addToCart(item, price) {
        const cartItem = cartItems.find(i => i.item === item);
        if (cartItem) {
            cartItem.quantity += 1; // Increase quantity if item already in cart
        } else {
            cartItems.push({ item: item, price: price, quantity: 1 });
        }
        updateCartCount();
        alert(`${item} added to the cart!`);
    }

    // Update the cart count on the cart icon
    function updateCartCount() {
        cartCount.innerText = cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    // Cart Section Click (Show Cart Items)
    cartIcon.addEventListener('click', () => {
        let cartContent = 'Your Cart is Empty';
        if (cartItems.length > 0) {
            cartContent = '<h3>Cart Items</h3><ul>';
            cartItems.forEach(item => {
                cartContent += `<li>${item.item} - ${item.quantity} x $${item.price.toFixed(2)}</li>`;
            });
            cartContent += '</ul>';
        }
        showCart(cartContent);
    });

    // Show Cart Function
    function showCart(content) {
        const cartMessage = document.createElement('div');
        cartMessage.classList.add('cart-popup');
        cartMessage.innerHTML = content;
        document.body.appendChild(cartMessage);

        setTimeout(() => {
            cartMessage.remove();
        }, 3000); // Show cart for 3 seconds
    }
});

    // Function to handle the search action
    function performSearch() {
        // Get the search input value
        const query = document.getElementById("searchInput").value;

        // Check if the input is not empty
        if (query.trim() !== "") {
            // For now, just log the query (or you can redirect to another page or search products)
            console.log("Searching for:", query);
            
            // Example: Redirect to a search results page (if you have one)
            // window.location.href = `search.html?query=${query}`;
            
            // Alert the query for now (you can replace this with actual search logic)
            alert("You searched for: " + query);
        } else {
            alert("Please enter a search term!");
        }
    }

    // Add event listener to the search button
    document.getElementById("searchBtn").addEventListener("click", performSearch);

    // Enable search by pressing Enter key
    document.getElementById("searchInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    
    // Function to handle the search action
    function performSearch() {
        // Get the search input value
        const query = document.getElementById("searchInput").value.toLowerCase();

        // Get all the product boxes
        const products = document.querySelectorAll(".box1 box, .box2 box, .box3 box, .box4 box, .box5 box, .box6 box, box7 box, .box8 box");

        // Loop through each product and check if the title matches the search query
        products.forEach(product => {
            const title = product.getAttribute("data-title").toLowerCase();

            // If the product title contains the search query, display it; otherwise, hide it
            if (title.includes(query)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Add event listener to the search button
    document.getElementById("searchBtn").addEventListener("click", performSearch);

    // Add event listener to enable searching by pressing Enter key
    document.getElementById("searchInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Function to handle the search action
    function performSearch() {
        // Get the search input value
        const query = document.getElementById("searchInput").value.toLowerCase();

        // Get all the product boxes
        const products = document.querySelectorAll(".box");

        // Loop through each product and check if the title matches the search query
        products.forEach(product => {
            const title = product.querySelector("h2").innerText.toLowerCase();

            // If the product title contains the search query, display it; otherwise, hide it
            if (title.includes(query)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Add event listener to the search button
    document.getElementById("searchBtn").addEventListener("click", performSearch);

    // Add event listener to enable searching by pressing Enter key
    document.getElementById("searchInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });


   
