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
        <NavbarBrand href="/">Kandy Korner</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/products">Products</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <span className="nav-link" onClick={handleLogout}> Logout </span>
      </Navbar>
    </div>
    );
};

export default withRouter(NavBar);