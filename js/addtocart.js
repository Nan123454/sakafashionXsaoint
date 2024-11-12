// Initialize cart if not already present in localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add product to cart with selected size
function addToCart(name, price, image, size) {
  // Find if product with same name and size is already in cart
  let existingProduct = cart.find(
    (item) => item.name === name && item.size === size
  );

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ name, price, image, size, quantity: 1 });
  }

  // Save cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${name} ukuran ${size} telah ditambahkan ke cart!`);
}

// Event listener for "Buy" buttons
document.querySelectorAll(".buy-btn").forEach((button) => {
  button.addEventListener("click", function () {
    let name = this.getAttribute("data-name");
    let price = parseFloat(this.getAttribute("data-price")); // Convert price to number
    let image = this.getAttribute("data-image"); // Get image URL
    let size = this.parentNode.querySelector(".size-select").value; // Get selected size

    // Add product to cart with selected size
    addToCart(name, price, image, size);
  });
});
