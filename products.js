// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "images/headphones.jpg",
        category: "Electronics",
        description: "High-quality wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "images/smartwatch.jpg",
        category: "Electronics",
        description: "Feature-rich smartwatch with health monitoring"
    },
    {
        id: 3,
        name: "Running Shoes",
        price: 79.99,
        image: "images/shoes.jpg",
        category: "Fashion",
        description: "Comfortable running shoes for all terrains"
    },
    {
        id: 4,
        name: "Coffee Maker",
        price: 49.99,
        image: "images/coffee-maker.jpg",
        category: "Home & Living",
        description: "Automatic coffee maker with timer"
    },
    {
        id: 5,
        name: "Laptop Backpack",
        price: 39.99,
        image: "images/backpack.jpg",
        category: "Fashion",
        description: "Durable laptop backpack with multiple compartments"
    },
    {
        id: 6,
        name: "Smart Speaker",
        price: 129.99,
        image: "images/speaker.jpg",
        category: "Electronics",
        description: "Voice-controlled smart speaker with premium sound"
    }
];

// Function to display products
function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Initialize products when the page loads
document.addEventListener('DOMContentLoaded', displayProducts); 