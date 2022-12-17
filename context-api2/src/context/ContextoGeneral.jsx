import React, { useState } from 'react'

export const ThemeContext = React.createContext()

const ContextoGeneral = (props) => {

  const [nombre, setNombre] = useState('Manuel')
  const [apellido, setApellido] = useState('Muñoz')

  return (
    <ThemeContext.Provider value={{ nombre, setNombre, apellido, setApellido }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ContextoGeneral