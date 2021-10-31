import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Shawon Travel</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">My Orders</Nav.Link>
                    <Nav.Link href="#pricing">Manage All Orders</Nav.Link>
                    <Nav.Link href="#pricing">Add New Service</Nav.Link>

                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                    <Button className="ms-2">LogOut</Button>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;