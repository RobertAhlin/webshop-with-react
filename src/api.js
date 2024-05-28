const API_URL = 'https://dummyjson.com';

// Funktion för att hämta alla produkter från API
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Unable to fetch products.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Funktion för att hämta en specifik produkt baserat på ID från API
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/product/${id}`);
    if (!response.ok) {
      throw new Error('Unable to fetch product.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
