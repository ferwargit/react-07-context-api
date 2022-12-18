import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import UserContext from "./contexts/UserContext";

const initialUser = {
  id: 1,
  name: "Juan",
  favoriteMovies: [1, 2, 3]
}

function App() {

  // Creamos un estado para el usuario
  const [user, setUser] = useState(initialUser);

  // Creamos una función para loguear al usuario
  const login = () => {
    setUser(initialUser);
  }

  // Creamos una función para desloguear al usuario
  const logout = () => {
    setUser(null);
  }

  // const user = {
  //   id: 1,
  //   name: "Juan",
  //   favoriteMovies: [1, 2, 3]
  // }

  // Creamos 2 funciones que se van a compartir con los componentes hijos
  // de App que son login y logout
  // Vamos a cargar el usuario en un estado. initialUser es el valor inicial
  const data = { user, login, logout }

  return (
    // El Provider es el que provee el contexto a los componentes hijos
    // El Provider tiene un atributo value que es el que se va a compartir
    // con los componentes hijos
    <div>
        <UserContext.Provider value={data}>
          <Navbar />
          <MovieList />
        </UserContext.Provider>
    </div>
  );
}

export default App;
