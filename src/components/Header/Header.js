import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase();
    console.log(user);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Shawon Travel</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>

                    <Nav.Link as={Link} to="/myorders">My Orders</Nav.Link>
                    <Nav.Link as={Link} to="/allorders">Manage All Orders</Nav.Link>
                    <Nav.Link as={Link} to="/addnewprogram">Add New Program</Nav.Link>

                    {
                        user.displayName ? <>
                            <Navbar.Text>
                                Signed in as: {user.displayName}
                            </Navbar.Text>
                            <Button onClick={logOut} className="ms-2">LogOut</Button></> : <Nav.Link as={Link} to="/login">Login</Nav.Link>


                    }
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;