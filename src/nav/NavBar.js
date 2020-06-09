import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push('/');
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <header>
     <h1 className="site-title">
       Houchens
        <br />
        <small>Candy Y'all</small>
      </h1>
      </header>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink href="/welcome">Home</NavLink>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/login">Login</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/products">Products</Link>
            </NavItem>
            <span className="nav-link" onClick={handleLogout}> Logout </span>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
    );
};

export default withRouter(NavBar);