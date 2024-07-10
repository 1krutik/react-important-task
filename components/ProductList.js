import React from 'react';

function ProductList() {
  // This would be fetched from an API in a real application
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' }
  ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
