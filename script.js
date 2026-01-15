/*
 * ============================================
 * STUDENT INSTRUCTIONS - QuerySelector Lesson
 * ============================================
 * 
 * Your task: Fix the bugs and implement the shopping cart functionality!
 * 
 * BUGS TO FIX:
 * 1. Line 3: The variable is named "appleButton" but it's selecting "#banana" - fix this!
 * 2. Line 7: The function is named "addApple" but should handle all items - rename it!
 * 
 * TODO - Implement the following features:
 * 1. Select all three buttons (apple, banana, mango) using querySelector
 * 2. Create a function that adds items to the shopping cart when clicked
 * 3. Display the item name and price in the #shopping-cart div
 * 4. Calculate and update the total price in the #total-span element
 * 5. Store prices: Apple = $0.75, Banana = $0.30, Mango = $1.25
 * 
 * HINTS:
 * - Use querySelector or querySelectorAll to select elements
 * - Use addEventListener to handle click events
 * - Use textContent or innerHTML to update the DOM
 * - You may need to parse prices from strings or store them in variables
 * 
 * ============================================
 */

console.log("script running");

// TODO: Fix this bug - should select #apple, not #banana!
const appleButton = document.querySelector("#apple");




console.log(appleButton);

// TODO: Rename this function to something more generic like "addItem"
// Rename function to make it more generic
const addItem = (item) => {
  
 alert(`${item.name} button clicked! Price: $${item.price.toFixed(2)}`);


 

console.log("script running");

// Select the correct buttons for apple, banana, and mango
const appleButton = document.querySelector("#apple");
const bananaButton = document.querySelector("#banana");
const mangoButton = document.querySelector("#mango");

// Prices for the items
const prices = {
  apple: 0.75,
  banana: 0.30,
  mango: 1.25
};

// This will store items in the shopping cart
const cart = [];

// Rename function to make it more generic
const handleCartAction = (itemName) => {
  // Get the price for the clicked item
  const price = prices[itemName];
  
  // Add item to cart array
  cart.push({ name: itemName, price: price });

  // Display item name and price in the shopping cart div
  const cartDiv = document.querySelector("#shopping-cart");
  const newItem = document.createElement("div");
  newItem.textContent = `${itemName.charAt(0).toUpperCase() + itemName.slice(1)} - $${price.toFixed(2)}`;
  cartDiv.appendChild(newItem);

  // Update the total price
  updateTotal();
}

// Function to update the total price in the #total-span element
const updateTotal = () => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const totalSpan = document.querySelector("#total-span");
  totalSpan.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Add event listeners for all three buttons
appleButton.addEventListener("click", () => handleCartAction("apple"));
bananaButton.addEventListener("click", () => handleCartAction("banana"));
mangoButton.addEventListener("click", () => handleCartAction("mango"));



}
// TODO: Add event listeners for all three buttons
appleButton.addEventListener("click",() =>addItemocart(appleButton));
bananaButton.addEventListener("click",() =>addItemocart(bananaButton));
mangoButton.addEventListener("click",() =>addItemocart(mangoButton));


