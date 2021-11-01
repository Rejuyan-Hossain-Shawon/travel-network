import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faParking, faCaravan, faDumpster, faShower, faWifi, faChargingStation } from '@fortawesome/free-solid-svg-icons'

const CampInfrustructure = () => {
    return (
        <div>
            <h1>Camp Infrastructure</h1>
            <Row xs={1} sm={1} md={3} className="g-4">

                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faParking} size="3x" />Parking in the camp</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faCaravan} size="3x" />Motorhome service</Card.Title>

                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faDumpster} size="3x" />Washing machines</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faShower} size="3x" />Sanitary facilitie</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faWifi} size="3x" />Fast Internet</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>

                        <Card.Body>
                            <Card.Title><FontAwesomeIcon icon={faChargingStation} size="3x" />Electrical cabinets</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </div>
    );
};

export default CampInfrustructure;