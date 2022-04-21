import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";
import propTypes from 'prop-types';

function Movie({  title, year, summary, poster ,genres }) {
    return (
<div class="movie__data">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title" >{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <ul class='movie__genres'>
                    {genres.map((genre,index)=>{
                        return <li key={index}class='movie_genre'>{genre}</li>
                    })}
                </ul>
                <p class="movie__summary">{summary.slice(0,180)}...</p>
            </div>
</div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;