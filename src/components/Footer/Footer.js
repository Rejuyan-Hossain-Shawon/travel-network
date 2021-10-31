import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-secondary mt-5 " >
            <CardGroup className="w-50 mx-auto bg-secondary d-flex-md justify-content-center align-items-center ">
                <Card className="bg-secondary text-white border-0">

                    <Card.Body>
                        <Card.Title>
                            {/* <img src={logo} alt="" /> */}
                        </Card.Title>
                        <Card.Text>
                            Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. In placerat facilisis tincidunt. Integer quis erat dictum, placerat massa non, bibendum ante. Duis aliquet tellus magna, quis egestas enim vulputate sed. Phasellus in dui malesuada, lacinia urna sed.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card className="bg-secondary text-warning border-0">

                    <Card.Body>
                        <Card.Title>Our Address</Card.Title>
                        <Card.Text>
                            Shukrabad,Dhanmondi 32
                            <br />
                            Dhaka
                            Bangladesh
                            <br />
                            Contact: 01720152305
                        </Card.Text>
                    </Card.Body>

                </Card>

            </CardGroup>
            <p>@ Copy Right Reserved to Rejuyan Hossain Shawon</p>
        </div>
    );
};

export default Footer;