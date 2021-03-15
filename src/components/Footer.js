import React from 'react';
import {Row, Col, Image, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Footer(){
    return (
        <Container fluid style={{background: '#684756', flexWrap: 'nowrap'}}>
            <Row>
                <Image
                    src="/assets/img/logo.png"
                    width="200"
                    height="200"
                    className="d-inline-block align-top"
                    alt="Atiba Construction Inc."
                />
                <Col style={{paddingLeft: '4', marginTop:'1em'}}>

                    <hr />
                    <h3> Contact Us </h3>
                    <hr />
                    <div>
                        <FontAwesomeIcon icon={faPhoneSquareAlt} style={{marginRight: '.6rem'}}/>
                        <a href="tel:+1 347-351-1133"> +1 347-351-1133</a>
                    </div>
                    <div >
                        <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '.6rem'}}/>
                        <a href="mailto:atibaconstruction@gmail.com"> atibaconstruction@gmail.com</a>
                    </div>
                    <MessengerCustomerChat
                        pageId="221129878668699"
                        appId="2891217431202254"
                    />
                </Col>

            </Row>
        </Container>
    )
}
