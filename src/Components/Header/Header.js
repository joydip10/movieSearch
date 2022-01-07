import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
const Header = (props) => {
    const [search,setSearch]=useState('');
    const [searchedMovies,setSearchMovies]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        props.addMovieHandler([]); 
    },[])
    const formSubmit=(e)=>{
        e.preventDefault();
        if(search!==""){
        const searchText=search.replaceAll(' ','%20');
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=bf2beee3e988585063af518b930f7142&query=${searchText}`)
        .then(res=>res.json())
        .then(data=>{
            console.log('Search',data);
            props.addMovieHandler(data.results)
        })
        e.target.reset();
        setSearchMovies('');
    }
    }
    return (
        <Navbar bg="" expand="lg" className="container py-3">
            <Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Form className="d-flex" onSubmit={formSubmit}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <Button type='submit' variant="outline-success">Search</Button>
                </Form>
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

export default Header;