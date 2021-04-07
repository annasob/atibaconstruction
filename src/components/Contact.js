import React from 'react';
import {Row, Col, Image, Container, CardDeck, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'

// ToDo: make fb url a constant
export function Contact(){
    return (
        <Container fluid style={{background: '#684756'}} id={'contact'}>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1 className="">Contact Us</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col style={{marginRight: '.3rem'}}>
                    <div>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} />
                        <a href="tel:+1 347-351-1133"> +1 347-351-1133</a>
                    </div>
                    <div >
                        <FontAwesomeIcon icon={faEnvelope} />
                        <a href="mailto:atibaconstruction@gmail.com"> atibaconstruction@gmail.com</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                        <a href="https://fb.me/atibaconstruction"> atibaconstruction</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}
