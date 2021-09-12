import '../styles/layout.scss'
import {Nav, Navbar} from "react-bootstrap";
import React from 'react'
import {Link} from "gatsby";
import assert from "../utils/assert";
import links from "./links";

const Layout = (props) => {
    assert(links, "Links does not exist");

    const createLink = (page, name) => {
        return <Nav.Link as={Link} to={page}>{name}</Nav.Link>
    }
    const linkDisplay = Object.values(links).map(link => {
        return createLink(link.page, link.name)
    });

    return (
        <div>
            <Navbar bg={"light"} expand={"lg"}>
                <Navbar.Brand>Jack Clarke</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav>
                        {linkDisplay}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div>{props.children}</div>
        </div>
    )
}

export default Layout;