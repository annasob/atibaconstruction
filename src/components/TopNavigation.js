import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

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
                    <Nav.Link href="https://fb.me/atibaconstruction">
                        <FontAwesomeIcon icon={faFacebookSquare} size={'2x'} />
                    </Nav.Link>

                    <Nav.Link href="mailto:atibaconstruction@gmail.com"><FontAwesomeIcon icon={faEnvelope} size={'2x'} /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}
