import React, { useState } from "react"

const Login = props => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  // Update state whenever an input field is edited
  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();
   
    props.setUser(credentials);
    props.history.push("/products");
  }

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
        <label htmlFor="inputUsername">Username</label>
          <input onChange={handleFieldChange} type="username"
            id="username"
            placeholder="username"
            required="" autoFocus="" />
          <label htmlFor="inputPassword">Password</label>
          <input onChange={handleFieldChange} type="password"
            id="password"
            placeholder="Password"
            required="" />
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;