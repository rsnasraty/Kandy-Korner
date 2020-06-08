import React, { useState } from 'react';
import ProductManager from '../../modules/ProductManager';
import './ProductForm.css'

const ProductForm = props => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...product };
    stateToChange[evt.target.id] = evt.target.value;
    setProduct(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create Product      object, invoke the ProductManager post method, and redirect to the full Product list
  */
  const constructNewProduct = evt => {
    evt.preventDefault();
    if (product.name === "" || product.price === "") {
      window.alert("Please input an product name and price");
    } else {
      setIsLoading(true);
      // Create the product and redirect user to product list
      ProductManager.post(product)
        .then(() => props.history.push("/products"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Product name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="color"
              placeholder="Color"
            />
            <label htmlFor="color">Color</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewProduct}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ProductForm