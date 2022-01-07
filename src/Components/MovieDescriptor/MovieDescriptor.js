import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import MovieHeader from './MovieHeader';

const MovieDescriptor = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bf2beee3e988585063af518b930f7142`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                setIsLoading(false);
            })
    }, [id])

    const { title, poster_path: image, overview, vote_average: rating, release_date,runtime } = movie;

    return (
        <div className='container'>
            <MovieHeader></MovieHeader>
            {
                (isLoading === false) &&
                <div className='d-flex flex-sm-column flex-md-row'>
                    <div id="image" className="me-2">
                        {
                            (image) &&
                            <Card.Img className="img-thumbnail" variant="top" src={`https://image.tmdb.org/t/p/w500${image}`} style={{height:'300px',width:'300px'}}/>
                        }
                    </div>
                    <div id="description" className='container'>
                        <div style={{textJustify:'justify'}} className='container'>
                        {title}({rating})
                        <br />
                        {release_date.split('-')[0]}|{runtime}
                        <br />
                        {overview}
                        </div>
                        
                    </div>
                </div>
        
            }
            </div>
    );
};

export default MovieDescriptor;