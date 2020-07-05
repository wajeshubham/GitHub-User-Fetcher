import React from "react";
import { FaGithub } from "react-icons/fa";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-dark text-secondary p-3 fixed-bottom"
    >
      GitHub Repository/user Search app
      <span className="float-right text-white">
        <a href="https://github.com/wajeshubham" style={{ color: "white" }}>
          <FaGithub className="mr-2 mb-2" style={{ fontSize: "20px" }} />
          Follow @wajeshubham
        </a>
      </span>
    </Container>
  );
};

export default Footer;
