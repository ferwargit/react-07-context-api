import React from "react";
import initialMovies from "../consts/initialMovies";
import Movie from "./Movie";

const MovieList = () => {
  return (
    <div className="container">
      <div className="row">
        {initialMovies.map((movie) => (

          // Con map retornamos una pelicula por cada pelicula que tengamos en el array
          // Tengo que indicarle un key para que react sepa que es un elemento unico
          <div className="col-md-4" key={movie.id}>
            <Movie 
              movie={movie}
            />
          </div>

        ))}
      </div>
    </div>
  );
};

export default MovieList;
