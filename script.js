// Initialize cart count
let cartCount = 0;

// Select elements
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Function to handle adding items
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Increment the count
        cartCount++;
        
        // Update the display
        cartCountElement.innerText = cartCount;

        // Visual feedback
        button.innerText = "Added!";
        button.style.backgroundColor = "#2ed573"; // Change to green

        // Reset button after 1 second
        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.style.backgroundColor = "#333";
        }, 1000);
    });
});