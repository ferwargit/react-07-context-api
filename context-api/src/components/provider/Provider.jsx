import React, { useState, createContext } from "react";

const MyProvider = (props) => {

  // MyProvide define un estado global con el hook useState.
  // Y va a ser compartido por todos los componentes que estén dentro de MyProvider.
  const [state, setState] = useState({});
  console.log(state);

  // MyProvider devuelve un componente llamado AppContext.Provider.
  // El componente AppContext.Provider tiene una propiedad llamada value.
  // La propiedad value es un array que contiene el estado global y la función que modifica el estado global.
  // El componente AppContext.Provider envuelve a todos los componentes que estén dentro de MyProvider.
  // Los componentes que estén dentro de MyProvider pueden acceder al estado global.
  // Los componentes que estén dentro de MyProvider pueden modificar el estado global.
  // En este caso children son todos los componentes (LogIn y Showstate) que estén dentro de MyProvider.
  // Comparten el estado global, que en este caso es state.
  return (
    <>
      <AppContext.Provider value={[state, setState]}>
        {props.children}
      </AppContext.Provider>
    </>
  )
}

export default MyProvider;
export const AppContext = createContext();