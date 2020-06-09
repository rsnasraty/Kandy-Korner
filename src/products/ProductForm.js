import React, { useState } from 'react';
import ProductsManager from "../modules/ProductsManager"

const ProductForm = props => {
  const [product, setProduct] = useState({ name: "", price: "", productTypeId: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...product };
    stateToChange[evt.target.id] = evt.target.value;
    setProduct(stateToChange);
  };

  const constructNewProduct = evt => {
    evt.preventDefault();
    if (product.name === "" || product.price === "" || product.productTypeId === "") {
      window.alert("Please input the product's name, price, and type");
    } else {
      setIsLoading(true);
      // Create the product and redirect user to product list
      ProductsManager.post(product)
        .then(() => props.history.push("/products"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
          <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Product name"
            />
            
            <label htmlFor="price">Price</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="price"
              placeholder="Price"
            />
     <label htmlFor="productTypeId">Product Type Id</label>
            <input
              type="int"
              required
              onChange={handleFieldChange}
              id="productTypeId"
              placeholder="product type Id"
            />
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