const products = [
    { 
        name: 'Wix', 
        category: 'Automation', 
        brand: 'Brand X', 
        description: 'Develop a Personalities',
        members: 'Member 1',
        tag: 'Tag 1',
        nextMeeting: 'In 30 min'
    },
    { 
        name: 'Shopily', 
        category: 'Category B', 
        brand: 'Brand Y', 
        description: 'Introdution a cloud',
        members: 'Member 2',
        tag: 'Tag 2',
        nextMeeting: 'Tomorrow'
    },
    { 
        name: 'PayPal', 
        category: 'Category A', 
        brand: 'Brand Z', 
        description: 'This a program cloud',
        members: 'Member 3',
        tag: 'Tag 3',
        nextMeeting: 'In 6 hours'
    },
    // Add more sample products as needed
];

// Function to display products in table format
function displayProducts() {
    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    productTable.innerHTML = ''; // Clear existing content

    const rows = products.map(product => {
        return `
            <tr>
                <td><input style="padding:20px;margin-bottom:0px" type="checkbox">${product.name}</td>
                <td>${product.category}</td>
                <td>${product.brand}</td>
                <td>${product.description}</td>
                <td>${product.members}</td>
                <td>${product.tag}</td>
                <td>${product.nextMeeting}</td>
            </tr>
        `;
    });

    productTable.innerHTML = rows.join('');
}

// Function to filter products based on search input
function search() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.members.toLowerCase().includes(searchTerm) ||
        product.tag.toLowerCase().includes(searchTerm) ||
        product.nextMeeting.toLowerCase().includes(searchTerm)
    );

    const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    productTable.innerHTML = ''; // Clear existing content

    if (filteredProducts.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 7; // Span across all columns
        cell.textContent = 'No products found.';
        row.appendChild(cell);
        productTable.appendChild(row);
    } else {
        const rows = filteredProducts.map(product => {
            return `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.category}</td>
                    <td>${product.brand}</td>
                    <td>${product.description}</td>
                    <td>${product.members}</td>
                    <td>${product.tag}</td>
                    <td>${product.nextMeeting}</td>
                </tr>
            `;
        });

        productTable.innerHTML = rows.join('');
    }
}

// Display products initially
displayProducts();