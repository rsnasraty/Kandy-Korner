import React, { useState, useEffect } from 'react'; 
import ProductCard from './ProductCard';
import ProductManager from '../../modules/ProductManager';

const ProductList = (props) => {
  // The initial state is an empty array
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    // After the data comes back from the API, we
    //  use the setProducts function to update state
    return ProductManager.getAll().then(productsFromAPI => {
      setProducts(productsFromAPI)
    });
  };

  //deletes an product from the API, THEN gets all products again
  const deleteProduct = id => {
    ProductManager.delete(id)
      .then(() => ProductManager.getAll().then(setProducts));
  };

  // got the Products from the API on the component's first render
  useEffect(() => {
    getProducts();
  }, []);

  
  return (
    <>
    <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {props.history.push("/products/new")}}>
      Admit Product
  </button>
  </section>
    <div className="container-cards">
      {products.map(product => <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} {...props}/>)}
    </div>
    </>
  );
};
export default ProductList
