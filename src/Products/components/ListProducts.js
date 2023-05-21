import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import { getProducts } from '../services';

const ListProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setproducts] = useState([]);
  useEffect(() => {
    async function loadProducts() {
      const response = await getProducts();
      console.log(response);
      if (response.status === 200) {
        setproducts(response.data);
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <ul>
      {products.map((el) => (
        <li>{el.title}</li>
      ))}
    </ul>
  );
};

export default ListProducts;
