import { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import SearchIcon from '../search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=95e0781'


const HomePage = () => {



    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);


    return (
        <>
            <ul className='app__navbar-links'>
                <li className='app'><a href='/about'>About</a></li>
                <li className='app'><a href='/movies'>Movies</a></li>
                <li className='app'><a href='/contact'>Contact</a></li>
                <li className='app'><a href='/login'>Login</a></li>
                <li className='app'><a href='/register'>Register</a></li>
            </ul>
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found!</h2>

                        </div>
                    )

            }
        </>
    )

}

export default HomePage