import React, {useRef, useContext} from 'react';
import {AppContext} from './provider/Provider';

const LogIn = () => {

  // useRef devuelve un objeto mutable. En este caso el objeto es nom.
  // Este objeto nom tiene una propiedad llamada .current.
  // El valor se mantiene en la propiedad nom.current.
  // La propiedad .current podría inicializarse con el argumento pasado useRef(initialValue)
  // En este caso el valor inicial es null.
  // useRef() es un hook que nos permite crear una referencia a un elemento del DOM.
  // useRef() nos permite acceder al valor de un elemento del DOM.
  // useRef() nos permite modificar el valor de un elemento del DOM.
  let nom = useRef(null);
  console.log(nom.current);

  // useContext es una forma de administrar el estado globalmente.
  // useContext es un hook que nos permite acceder al estado global.
  // useContext se puede usar con useState.
  const [state, setState] = useContext(AppContext);
  console.log(state);
  return(
    <>
      <input type="text" ref={nom} onChange={() => {setState({name:nom.current.value})}} />
    </>
  )
}

export default LogIn;