// src/services/Api.jsx

// Define a function to fetch products from the DummyJSON API
export async function fetchProducts() {
    try {
        const productsPerPage = 99999; // Adjust the number of products per page as needed
        let currentPage = 1;
        let allProducts = [];

        while (true) {
            // Make the fetch request to the API endpoint for the specified page
            const response = await fetch(`https://dummyjson.com/products?page=${currentPage}&limit=${productsPerPage}`);

            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            // Parse the JSON response
            const data = await response.json();

            // Add the products from the current page to the array of all products
            allProducts = allProducts.concat(data.products);

            // If there are no more pages, break out of the loop
            if (data.page === data.pages) {
                break;
            }

            // Increment the page number for the next request
            currentPage++;
        }

        // Return all fetched products
        return allProducts;
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching products:', error);
        return null; // Return null or throw an error depending on your error handling strategy
    }
}
