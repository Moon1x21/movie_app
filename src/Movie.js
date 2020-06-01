import React from "react";
import Proptypes from "prop-types";
import "./css/Movie.css";

function Movie({year,title,summary,poster,genres}){
    return <div className = "movie">
        <img src={poster} alt={title} title ={title}></img>
        <div className = "movie_data">
            <h3 className = "movie_title">{title}</h3>
            <h5 className = "movie_year">{year}</h5>
            <ul className="genre">
                {genres.map((genre,index) => (
                <li key = {index} className="genres__genre">{genre}</li>
            ))}
            </ul>
            <p className = "movie_summary">{summary.slice(0,180)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: Proptypes.number.isRequired,
    year: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    poster: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
}
export default Movie;