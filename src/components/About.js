import React from 'react';
import {Row, Col, Image, Container } from 'react-bootstrap';

export function About(){
    return (
        <Container fluid style={{background: '#BFEDE8'}} id={'about'}>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1 className="">About Us</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Image
                    src="/assets/img/about.png"
                    className="d-flexjustify-content-center"
                    height="300"
                    alt="About Us"
                />
                <Col style={{paddingLeft: '4', marginTop:'1em'}}>

                    <div>
                        <b>Atiba Construction Corp.</b> has built a solid reputation doing remodels and renovations in the NYC area.
                        We are family owned with over 20 years experience in construction and carpentry. <br /><br />
                        From home restorations, custom kitchens, custom bathrooms, finished basements and overall home make-overs,
                        Atiba Construction Corp. has the team, equipment, experience, and expertise to complete any size project on time and on budget.

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

