import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Navbar = () => {
  console.log('Navbar');

  // const user = null; // Cuando la sesion no esta iniciada tiene un valor null
  // y se muestra el mensaje "Bienvenid@"
  // const user = {name:'Luis'};

  // Una vez que tenemos el context podemos consumirlo
  // Para consumir el context usamos el hook useContext
  // useContext recibe como argumento el context que queremos consumir
  // y retorna el valor del context
  // Esta data se refiere al valor del context, al value que le pasamos al provider
  // que basicamente es un objeto con la informacion del usuario
  // de donde vamos a extraer el user
  // const data = useContext(UserContext);

  // Una vez que creo las funciones login y logout, las puedo extraer y consumir del context
  // y asi puedo usarlas en el componente, mas precisamente en los botones
  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">

        <span className="navbar-brand">
          <h2>{user ? `Hola ${user.name}` : 'Bienvenid@'}</h2>
        </span>

        { user
              // Si el usuario esta logueado se muestra el boton de cerrar sesion
            ? <button className="btn btn-primary" onClick={logout}>Cerrar Sesion</button>
              // Si el usuario no esta logueado se muestra el boton de iniciar sesion
            : <button className="btn btn-primary" onClick={login}>Iniciar Sesion</button>
        }
        
      </div>
    </nav>
  );
};

export default Navbar;
