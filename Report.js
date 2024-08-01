document.addEventListener('DOMContentLoaded', function() {
  const inventoryData = [
      { itemName: 'Laptop', category: 'Electronics', quantity: 10, price: '$1200' },
      { itemName: 'Desk Chair', category: 'Furniture', quantity: 5, price: '$150' },
      { itemName: 'Notebook', category: 'Stationery', quantity: 50, price: '$3' },
      { itemName: 'Monitor', category: 'Electronics', quantity: 7, price: '$300' },
      { itemName: 'Pen', category: 'Stationery', quantity: 100, price: '$1' }
  ];

  const tableBody = document.querySelector('#inventoryTable tbody');

  inventoryData.forEach(item => {
      const row = document.createElement('tr');

      Object.values(item).forEach(text => {
          const cell = document.createElement('td');
          cell.textContent = text;
          row.appendChild(cell);
      });

      tableBody.appendChild(row);
  });
});
