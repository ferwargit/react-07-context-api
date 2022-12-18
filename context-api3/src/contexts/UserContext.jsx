import React, { createContext, useState } from 'react';

// El objeto UserContext tiene 2 propiedades un Provider y un Consumer
const UserContext = createContext();

// El objeto initialUser tiene la informacion del usuario
const initialUser = { id: 1, name: 'Fernando', favorites: [1,2] };

// La propiedad children contiene la informacion del Navbar y del MovieList
const UserProvider = ({ children }) => {

  const [user, setUser] = useState(initialUser);

  // Creamos la funcion login
  const login = () => {
    setUser(initialUser);
  }

  // Creamos la funcion logout
  const logout = () => {
    setUser(null);
  }

  // Pasamos las 2 funciones que vamos a consumir en el componente Navbar
  const data = { user, login, logout }

  return (
    <UserContext.Provider value={ data }>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;