import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TourProgram from './TourProgram/TourProgram';

const TourPrograms = () => {
    const [tourPrograms, setTourPrograms] = useState([]);
    useEffect(() => {
        fetch('https://grim-shadow-91675.herokuapp.com/programs')
            .then(res => res.json())
            .then(data => setTourPrograms(data))
    }, [])

    return (
        <div>
            <h1 className="fw-bolder">Tour Programs</h1>
            <Row xs={1} sm={2} md={3} className="g-4">

                {
                    tourPrograms.map(tourProgram => <TourProgram key={tourProgram._id} tourProgram={tourProgram}></TourProgram>)
                }

            </Row>







        </div>
    );
};

export default TourPrograms;