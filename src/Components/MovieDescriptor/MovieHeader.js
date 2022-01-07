import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
const MovieHeader = (props) => {
   
    const navigate=useNavigate();
   
    return (
        <Navbar bg="" expand="lg" className="container py-3">
            <Container>
            <Navbar.Brand>Movie Details</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
           
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <i onClick={()=>{navigate('/home')}} className="btn fas fa-home fa-2x"></i>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MovieHeader;