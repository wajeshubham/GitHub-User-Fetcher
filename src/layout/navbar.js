import React, { useState, useContext } from "react";
import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  NavLink,
} from "reactstrap";

import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const MyNavbar = () => {
  const context = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="dark" light expand="md" className="text-white p-3 mb-2">
      <NavbarBrand>
        <Link to="/" className="text-white" style={{ textDecoration: "none" }}>
          <h4>GetGit User</h4>
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white mb-1 text-lowercase">
        {context.user?.email ? "Welcome " + context.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={Toggle} />
      <Collapse isOpen={isOpen} navbar>
        {context.user ? (
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink
                className="text-white"
                tag={Link}
                onClick={() => {
                  context.setUser(null);
                }}
              >
                Log Out
              </NavLink>
            </NavItem>
          </Nav>
        ) : (
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink className="text-white" tag={Link} to="/signup">
                Register
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" tag={Link} to="/signin">
                Log in
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Collapse>
    </Navbar>
  );
};

export default MyNavbar;
