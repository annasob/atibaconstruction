import React from 'react';
import {Row, Col, Image, Container, CardDeck, Card} from 'react-bootstrap';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Contact(){
    return (
        <Container fluid style={{background: '#EEE2DF'}} id={'contact'}>
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
                <Col>
                    <div>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{marginRight: '.6rem'}}/>
                        <a href="tel:+1 347-351-1133"> +1 347-351-1133</a>
                    </div>
                    <div >
                        <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '.6rem'}}/>
                        <a href="mailto:atibaconstruction@gmail.com"> atibaconstruction@gmail.com</a>
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
