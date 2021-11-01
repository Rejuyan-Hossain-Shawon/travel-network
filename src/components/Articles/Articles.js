import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import blog1 from "../../images/Blog-img-1.jpg"
import blog2 from "../../images/Blog-img-2.jpg"
import blog3 from "../../images/Blog-img-3.jpg"

const Articles = () => {
    return (
        <div>
            <h3>Tour Related Articles</h3>
            <Row xs={1} sm={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={blog1} />
                        <Card.Body>

                            <Card.Title>Camper van holiday</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> <small> Places by Melissa Burton </small></Card.Subtitle>

                            <Card.Text>
                                Camper vans, also known as conversion vans, and Sprinters (which are actually a van model produced by Mercedes), are often viewed as alternatives to campers. ... Camper vans come with or without bathrooms, showers, sinks, kitchens, storage, beds, etc.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={blog2} />
                        <Card.Body>
                            <Card.Title>Cozy beach campfire</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> <small> Places by Melissa Burton </small></Card.Subtitle>

                            <Card.Text>
                                A beach bonfire is a time-honored tradition California residents and visitors have enjoyed for years. ... Some beaches provide fire pits for free, first come-first serve. Other beaches, including many state beaches, offer them to the campsite guests as part of their camping fee
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={blog3} />
                        <Card.Body>
                            <Card.Title>Home is where RV is</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> <small> Places by Melissa Burton </small></Card.Subtitle>

                            <Card.Text>
                                When people refer to RVs (Recreational Vehicles), they usually mean either a motor vehicle or trailer equipped with some of the amenities of home. ... Motorhomes refer to motorized units that usually have beds, a kitchen, bathroom and living quarters while away from your fixed home.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </div>
    );
};

export default Articles;