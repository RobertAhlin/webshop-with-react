import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { fetchProductById } from '../api';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Hämta produktinformation från API baserat på ID
    fetchProductById(id)
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  return (
    <div>
      <h2>Produktsida</h2>
      {product ? <ProductDetail product={product} /> : <p>Laddar produkt...</p>}
    </div>
  );
}

export default ProductPage;
