import React from 'react';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';

/*
  #7B9E87
  #684756
  #2E5266
 */
export function Services(){
    return (
        <Container fluid style={{background: '#BFADA3'}} id={'services'}>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1 className="">Services</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardDeck>
                        <Card className="text-center">
                            <Card.Img variant="top" src='../assets/img/kitchen_prof_s.png' style={{ opacity: '40%'}} />
                            <Card.ImgOverlay className="d-flex align-items-center">
                                <Card.Body>
                                    <span className="d-flex align-items-center font-weight-bold justify-content-center"> Kitchen Remodel</span>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>


                        <Card className="text-center">
                            <Card.Img variant="top" src='../assets/img/bathroom_prof_s.png'style={{ opacity: '40%'}} />
                            <Card.ImgOverlay className="d-flex align-items-center">
                                <Card.Body >
                                    <span className="d-flex align-items-center font-weight-bold justify-content-center"> Bathroom Remodel</span>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>

                        <Card className="text-center">
                            <Card.Img variant="top" src='../assets/img/staircase_prof_s.png'style={{ opacity: '40%'}} />
                            <Card.ImgOverlay className="d-flex align-items-center">
                                <Card.Body >
                                    <span className="d-flex font-weight-bold justify-content-center"> Stairs</span>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>


                        <Card className="text-center card-block d-flex">
                            <Card.Img variant="top" src='../assets/img/painting_s.png'style={{ opacity: '40%'}} />
                            <Card.ImgOverlay className="d-flex align-items-center">
                                <Card.Body >
                                    <span className="d-flex font-weight-bold justify-content-center"> Painting</span>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="text-center card-block d-flex">
                            <Card.Img variant="top" src='../assets/img/floor_prof_s.png'style={{ opacity: '40%'}} />
                            <Card.ImgOverlay className="d-flex align-items-center">
                                <Card.Body >
                                    <p className="d-flex font-weight-bold justify-content-center">Flooring</p>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="text-center card-block d-flex">
                            <Card.Img variant="top" src='../assets/img/windows_s.png'style={{ opacity: '40%'}} />
                            <Card.ImgOverlay className="d-flex align-items-center">
                                <Card.Body>
                                    <p className="  font-weight-bold justify-content-center">Windows</p>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                    </CardDeck>
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
