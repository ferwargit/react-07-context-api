// 1-Necesito React por que voy a trabajar con JSX
// Necesito createContext para crear el context
import React, { createContext } from "react";
import initialMovies from "../consts/initialMovies";

// 2-Creamos el contexto
const MoviesContext = createContext();

// 5-Creamos el componente MoviesProvider
// Esta data la enviamos a los demas componentes que la consumiran
const MoviesProvider = ({ children }) => {

  // 6-En este caso no necesitamos un estado ya que es informacion que no va a cambiar
  // en el tiempo. Es un array de peliculas que importamos de initialMovies
  // Ahora ya podemos consumir este contexto en el componente App
  const data = { movies: initialMovies };

  return (
    <MoviesContext.Provider value={ data }>
      {children}
    </MoviesContext.Provider>
  );
};

// 4-Tambien tenemos que exportar un provider
// Quel lo vamos a usar en el componente App y lo llamamos MoviesProvider
// El componente MoviesProvider va a envolver a todos los componentes que necesiten
// acceder al contexto
export { MoviesProvider };

// 3-Exportamos el contexto
export default MoviesContext;

