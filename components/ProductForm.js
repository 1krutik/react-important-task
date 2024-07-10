import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !id;

  const [product, setProduct] = useState({
    name: '',
    description: ''
  });

  useEffect(() => {
    if (isEdit) {
      // Fetch product by id and setProduct
    }
  }, [id, isEdit]);

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Save product logic here
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{isEdit ? 'Edit Product' : 'Add Product'}</h1>
      <label>
        Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={product.description} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default ProductForm;
