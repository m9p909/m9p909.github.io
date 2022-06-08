import "../styles/layout.scss";
import { Nav, Navbar, Container } from "react-bootstrap";
import React from "react";
import { Link } from "gatsby";
import assert from "../utils/assert";
import links from "./links";

const Layout = (props) => {
  assert(links, "Links does not exist");

  const createLink = (page, name) => {
    return (
      <Nav.Link as={Link} to={page} key={page}>
        {name}
      </Nav.Link>
    );
  };
  const linkDisplay = Object.values(links).map((link) => {
    return createLink(link.page, link.name);
  });

  return (
    <>
      
        <Navbar bg={"light"} expand={"lg"}>
          <Container>
            <Navbar.Brand>Jack Clarke</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse>
              <Nav>{linkDisplay}</Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>{props.children}</Container>
     
    </>
  );
};

export default Layout;
