import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

export function TopNavigation(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Image
                    src="/assets/img/logo.png"
                    width="120"
                    height="120"
                    className="d-inline-block align-top"
                    alt="Atiba Construction Inc."
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#gallery">Gallery</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#fb">Facebook</Nav.Link>
                    <Nav.Link href="#gmail">E-Mail</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}
