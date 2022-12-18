import React from 'react'

const Movie = ({ movie }) => {
  console.log('Movie');
  const imgStyles = {
    height: '260px',
    objectFit: 'cover',
  }

  const isFavorite = false;

  return (
    <div className='card' >
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className='card-img-top'
        style={imgStyles}
      />
      <div className='card-body' >
        <h4>{movie.title}</h4>
        <button className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`} >
          Favorito
        </button>
      </div>
    </div>
  )
}

export default Movie