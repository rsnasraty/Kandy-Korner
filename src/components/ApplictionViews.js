import Login from "./auth/Login";
import { Route} from "react-router-dom";
import React from "react";
import Welcome from "./auth/Welcome";


const ApplicationViews = props => {
    /* const hasUser = props.hasUser; */
    const setUser = props.setUser;

    return (
        <React.Fragment>
          <Route
            exact
            path="/"
            render={props => {
              return <Welcome />;
            }}
          />
    
          <Route
            path="/login"
            render={props => {
              return <Login setUser={setUser} {...props} />;
            }}
          />

        </React.Fragment>
      );
    };
    
    export default ApplicationViews;
    