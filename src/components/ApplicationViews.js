import Login from "../auth/Login.js"
import { Route, Redirect } from "react-router-dom";
import React from "react";
import Welcome from "../auth/Welcome.js";
import ProductList from "../products/ProductList.js"

const ApplicationViews = props => {
    const hasUser = props.hasUser; 
    const setUser = props.setUser;

    return (
        <React.Fragment>
      <Route exact
            path="/"
            render={props => {
              return <Welcome />;
            }}
          />


        <Route path="/login"
            render={props => {
              return <Login setUser={setUser} {...props} />;
            }}
          />

          

        <Route
        exact
        path="/products"
        render={props => {
          if (hasUser) {
            return <ProductList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

          

        </React.Fragment>
      );
    };
    
    export default ApplicationViews;
    