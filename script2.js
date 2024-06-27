document.addEventListener("DOMContentLoaded", function() {
    // Get all quantity input fields
    const quantityInputs = document.querySelectorAll(".quantity");
  
    // Add event listeners for increase and decrease buttons
    const increaseButtons = document.querySelectorAll(".increase-btn");
    const decreaseButtons = document.querySelectorAll(".decrease-btn");
  
    increaseButtons.forEach(button => {
      button.addEventListener("click", function() {
        const input = this.parentNode.querySelector(".quantity");
        input.value = parseInt(input.value) + 1;
      });
    });
  
    decreaseButtons.forEach(button => {
      button.addEventListener("click", function() {
        const input = this.parentNode.querySelector(".quantity");
        const currentValue = parseInt(input.value);
        if (currentValue > 0) {
          input.value = currentValue - 1;
        }
      });
    });
  
    // Add event listener for order buttons
    const orderButtons = document.querySelectorAll(".order-btn");
    orderButtons.forEach(button => {
      button.addEventListener("click", function() {
        alert("Your order has been placed!");
      });
    });
  })