import React, { useContext } from 'react'
import { ThemeContext } from '../context/ContextoGeneral'

const About = () => {

  const {nombre, apellido} = useContext(ThemeContext)

  return (
    <>
      <div>About</div>
      <p>{nombre} {apellido}</p>
    </>
  )
}

export default About