 import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <Link to={`/edit/${product.id}`}>Edit</Link>
    </div>
  );
}

export default ProductItem;
