import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";

import UserContext from "../context/UserContext";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const context = useContext(UserContext);
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-dark text-secondary p-3 fixed-bottom"
    >
      {context.user?.uid ? (
        <span className="text-white mt-2">
          <a href="https://github.com/wajeshubham" style={{ color: "white" }}>
            <FaGithub className="mr-2 mb-2" style={{ fontSize: "20px" }} />
            Follow @wajeshubham
          </a>
        </span>
      ) : (
        <p>GitHub user Search app</p>
      )}
    </Container>
  );
};

export default Footer;
