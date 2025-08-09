const products = [
    { id: 1, name: "T-Shirt", price: 500, image: "tshirt.jpeg" },
    { id: 2, name: "Shoes", price: 1500, image: "watch.jpeg" },
    { id: 3, name: "Watch", price: 2000, image: "shoes.jpeg" }
];

let cartCount = 0;

function loadProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
}

loadProducts();
