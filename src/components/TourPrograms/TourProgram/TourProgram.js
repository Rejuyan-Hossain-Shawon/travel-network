import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const TourProgram = (props) => {
    console.log(props.tourProgram);
    const { title, description, price, picture, duration } = props.tourProgram;

    return (
        <Col>
            <Card>
                <Card.Img height="400px" variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className="fw-bolder">{title}</Card.Title>
                    <Card.Subtitle className="mb-2 fw-bold">Cost:{price} Duration:{duration} days</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer><Button>Go for Holiday</Button></Card.Footer>
            </Card>
        </Col>
    );
};

export default TourProgram;