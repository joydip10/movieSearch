import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SingleMovies = (props) => {
    const {title,poster_path:image, overview,vote_average:rating,id}=props.movie;
    const navigate=useNavigate();
    const goTo=(id)=>{
        navigate(`/movieDescriptor/${id}`);
    }
    return (
        
        <Col>
        <Button variant="none" onClick={()=>goTo(id)}>
            <Card className="">
                {
                (image) &&
                <Card.Img className="img-fluid img-thumbnail" variant="top" src={ `https://image.tmdb.org/t/p/w500${image}`} style={{height:'200px'}} />
                }
                <Card.Body>
                    <Card.Title className='d-flex justify-content-between align-items-center mb-0'>
                        <p style={{fontSize:'12px',textJustify:'left'}}>{title}</p>
                        <h6>{rating}</h6>
                    </Card.Title>
                    <Card.Text>
                        {overview.substr(0,20)}<span>[...]</span>
                    </Card.Text>
                </Card.Body>
            </Card>
            </Button>
        </Col>
        
    );
};

export default SingleMovies;