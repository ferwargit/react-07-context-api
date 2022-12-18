import React, { createContext, useState } from 'react';

// El objeto UserContext tiene 2 propiedades un Provider y un Consumer
const UserContext = createContext();

// El objeto initialUser tiene la informacion del usuario
const initialUser = { id: 1, name: 'Fernando', favoriteMovies: [1,2] };

// La propiedad children contiene la informacion del Navbar y del MovieList
const UserProvider = ({ children }) => {

  const [user, setUser] = useState(initialUser)

  // Creamos la funcion login
  const login = () => {
    setUser(initialUser);
  }

  // Creamos la funcion logout
  const logout = () => {
    setUser(null);
  }

  // Creamos una funcion para Favoritos
  // Aqui recibimos el id de la pelicula que queremos agregar a favoritos
  // Esta funcion la vamos a necesitar en una movie especifica entonces
  // nos vamos al componente Movie.
  const toggleFavoriteMovieToUser = (movieId) => {
    // alert(movieId);

    // Tenemos que controlar
    // Vamos a consultar si el usuario tiene la pelicula con el id que estamos recibiendo
    // Con el signo 2do? preguntamos si el usuario tiene la propiedad favoriteMovies
    // si la tiene hace la operacion.
    const isFavorite = user.favoriteMovies.includes(movieId);
    const favoriteMovies = isFavorite
      // si es true, tenemos que quitarla del arreglo de favoritos
      ? user.favoriteMovies.filter(favMovId => favMovId !== movieId) // Delete movieId from favoriteMovies
      // si es false, tenemos que agregarla al arreglo de favoritos
      : [...user.favoriteMovies, movieId]; // Add movieId to favoriteMovies

    setUser({
      // Tenemos que setear al usuario con el mismo arreglo pero con el nuevo
      // arreglo de peliculas favoritas
      ...user,
      favoriteMovies: favoriteMovies,
    })
  }

  // Pasamos las 2 funciones que vamos a consumir en el componente Navbar
  const data = { user, login, logout, toggleFavoriteMovieToUser }

  return (
    <UserContext.Provider value={ data }>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;