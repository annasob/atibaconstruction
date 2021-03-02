import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { faPhoneSquareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export function Footer(){
    return (
        <Row fluid style={{background: '#684756', flexWrap: 'nowrap' }}>
            <Col >
                <Image
                    src="/assets/img/logo.png"
                    width="200"
                    height="200"
                    className="d-inline-block align-top"
                    alt="Atiba Construction Inc."
                />
                <hr />
                <h3> Contact Us </h3>
                <hr />
                <FontAwesomeIcon icon={faPhoneSquareAlt} /><a href="tel:+1 347-351-1133"> +1 347-351-1133</a><br/>
                <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:atibaconstruction@gmail.com"> atibaconstruction@gmail.com</a><br/>
                <MessengerCustomerChat
                    pageId="221129878668699"
                    appId="2891217431202254"
                />
            </Col>

        </Row>
    )
}
