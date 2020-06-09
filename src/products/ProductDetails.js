import React, { useState, useEffect } from 'react';
import ProductsManager from "../modules/ProductsManager.js";
import './Products.css'

const ProductDetails = props => {
  const [product, setProduct] = useState({ name: "", price: "", productTypeId: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ProductsManager.get(props.productId)
      .then(product => {
        setProduct({
          name: product.name,
          price: product.price,
          productTypeId: product.productTypeId
        });
        setIsLoading(false);
      });
  }, [props.productId]);

  const handleDelete = () => {
    setIsLoading(true);
    ProductsManager.delete(props.productId).then(() =>
      props.history.push("/products")
    );
  };

  //testing edit

  const handleFieldChange = evt => {
    const stateToChange = { ...product };
    stateToChange[evt.target.id] = evt.target.value;
    setProduct(stateToChange);
  };

  const updateExistingProduct = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedProduct= {
      id: props.match.params.productId,
      name: product.name,
      price: product.price,
      productTypeId: product.productTypeId
    };

    ProductsManager.update(editedProduct)
      .then(() => props.history.push("/products"))
  }

//end testing edit

  return (
     
    <div className="product-card">
      <div className="card-content">
        <h2>
          Name: <span className="card-productname">{product.name}</span>
        </h2>
        <h4> Price: {product.price}</h4>
        <h4> Product Type Id: {product.productTypeId} </h4>
        <button type="button" id="delete" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
        <button
              type="button" disabled={isLoading}
              onClick={updateExistingProduct}
              className="btn btn-primary"
            >Submit</button>
      </div>
    </div>
  );
}

export default ProductDetails;