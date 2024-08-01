const productTableBody = document.querySelector("#productTable tbody");

function addProduct() {
    const productName = document.getElementById("productName").value.trim();
    const productPrice = document.getElementById("productPrice").value.trim();
    const productQuantity = document.getElementById("productQuantity").value.trim();

    if (productName === "" || productPrice === "" || productQuantity === "") {
        alert("Please fill in all fields.");
        return;
    }

const newRow = productTableBody.insertRow();
 newRow.innerHTML = `
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td><button class="delete-btn" onclick="deleteProduct(this)">Delete</button></td>
    `;

clearForm();
}

function deleteProduct(button) {
const row = button.parentNode.parentNode;
productTableBody.removeChild(row);
}

function clearForm() {
     document.getElementById("productName").value = "";
     document.getElementById("productPrice").value = "";
     document.getElementById("productQuantity").value = "";
 }
