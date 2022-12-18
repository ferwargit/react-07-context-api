import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

const Movie = ({ movie }) => {
  // console.log('Movie');

  // Aqui vamos a extraer la funcion toggleFavoriteMovieToUser
  // que esta en el contextoONconst context = useContext(contextValue); UserContext
  // const data = Como ña data es un objeto lo ponemos de una vez entre llaves
  const { user, toggleFavoriteMovieToUser } = useContext(UserContext);

  const imgStyles = {
    height: '260px',
    objectFit: 'cover',
  }

  // const isFavorite = false;
  // favoriteMovies es un array de ids de peliculas favoritas
  // Para comprobar si este arreglo tiene el id de la pelicula que estamos renderizando
  // usamos el metodo includes. Si es true el boton se pone verde
  // Hay que traer el objeto user del contexto
  // ? Pregunta si es un arreglo si es un arreglo hace la operacion
  // Tambien es recomendaable usar el signo ? para preguntar si el objeto user tiene la propiedad favorite
  const isFavorite = user?.favorite?.includes(movie.id);

  return (
    <div className='card' >
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className='card-img-top'
        style={imgStyles}
      />
      <div className='card-body'>
        <h4>{movie.title}</h4>
        { user?.id &&
        
          <button className={
            `btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}
          // Tengo que extraer la funcion para poder usarla
          // Aqui necesitamos enviarle el movie.id
          // Como estamos usando los () en la funcion, tenemos que usar una funcion   anonima
          // para que no se ejecute la funcion al momento de renderizar el componente
            onClick={() => toggleFavoriteMovieToUser(movie.id)}
          >
            Favorito
          </button>
        }
      </div>
    </div>
  )
}

export default Movie