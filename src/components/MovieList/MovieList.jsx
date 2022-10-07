import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    function handleClick() {
        dispatch({ type: 'SET_DETAILS', payload: movies.id });

    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            {/* <img src={movie.poster} alt={movie.title} /> */}
                            
                            <input type="image" src={movie.poster} alt={movie.title} onClick={() => handleClick(movies.id)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;