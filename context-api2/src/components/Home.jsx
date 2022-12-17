import React, { useContext } from 'react'
import { ThemeContext } from '../context/ContextoGeneral'

const Home = () => {

  const {nombre, apellido} = useContext(ThemeContext)

  return (
    <>
      <div>Home</div>
      <p>{nombre} {apellido}</p>
    </>
  )
}

export default Home