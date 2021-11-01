import React from 'react';
import { Button, Card, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const TourProgram = (props) => {

    const { title, description, price, picture, duration, _id } = props.tourProgram;
    const { isLoading } = useFirebase();
    if (isLoading) {
        return <Button variant="primary" disabled>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </Button>
    }

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
                <Card.Footer><Link to={`/tourprogram/${_id}`}><Button>Go for Holiday</Button></Link></Card.Footer>
            </Card>
        </Col>
    );
};

export default TourProgram;