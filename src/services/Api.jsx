// Api.jsx
// Define a function to fetch products from the DummyJSON API
export async function fetchProducts() {
    try {
        // Make the fetch request to the API endpoint for the specified category
        const response = await fetch(`https://dummyjson.com/products/`);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        // Parse the JSON response
        const data = await response.json();

        // Return the product data
        return data.products;
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching products:', error);
        return null; // Return null or throw an error depending on your error handling strategy
    }
}
