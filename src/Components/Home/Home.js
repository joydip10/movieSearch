import React, { useEffect, useState } from 'react';
import { Container, NavLink, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import HeaderContainer from '../../Container/HeaderContainer/HeaderContainer';
import Header from './../Header/Header';
import SingleMovies from './SingleMovie/SingleMovies';
import { Button } from 'react-bootstrap';

const Home = (props) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (props.movieData.length === 0) {
            setLoading(true);
            fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=bf2beee3e988585063af518b930f7142&language=en-US')
                .then(res => res.json())
                .then(data => {
                    const movies = data.results;
                    movies.sort(function (a, b) {
                        const a_year = parseInt(a.release_date.split('-')[0]);
                        const b_year = parseInt(b.release_date.split('-')[0]);
                        return b_year - a_year;
                    });
                    setMovies(movies);
                    setLoading(false);
                })
        }
        else {
            setLoading(true);
            setMovies(props.movieData);
            setLoading(false);
        }
    }, [props.movieData])

    return (
        <div>
            <HeaderContainer></HeaderContainer>
            {
                (isLoading === false) &&
                <Container>
                    <Row xs={1} md={5} className="g-4">
                        {
                            movies.map(mov => <SingleMovies movie={mov} key={mov.id}></SingleMovies>)
                        }
                    </Row>
                </Container>
            }
            {
                (isLoading===true) &&
                (isLoading===true)&&
                <div className='text-center'>
                    <Spinner animation="border" />
                </div>
            }
        </div>
    );
};

export default Home;