import React, { useContext } from 'react';
import { AppContext } from './provider/Provider';

const Showstate = () => {

  const [state, setState] = useContext(AppContext);

  return(
    <>
      <p>{state.name}</p>
    </>
  )
}

export default Showstate;