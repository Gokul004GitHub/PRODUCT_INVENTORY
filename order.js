document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const customerName = document.getElementById('customerName').value;
  const item = document.getElementById('item').value;
  const quantity = document.getElementById('quantity').value;
  const address = document.getElementById('address').value;

  // Display a confirmation message
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = `Order placed successfully for ${quantity} ${item}(s) by ${customerName}.`;
  
  // Clear the form fields
  document.getElementById('orderForm').reset();
});
