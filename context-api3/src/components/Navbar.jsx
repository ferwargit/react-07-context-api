import React from "react";

const Navbar = () => {

  // const user = null; // Cuando la sesion no esta iniciada tiene un valor null
  // y se muestra el mensaje "Bienvenid@"
  const user = {name:'Luis'};

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">

        <span className="navbar-brand">
          <h2>{user ? `Hola ${user.name}` : 'Bienvenid@'}</h2>
        </span>

        { user
              // Si el usuario esta logueado se muestra el boton de cerrar sesion
            ? <button className="btn btn-primary">Cerrar Sesion</button>
              // Si el usuario no esta logueado se muestra el boton de iniciar sesion
            : <button className="btn btn-primary">Iniciar Sesion</button>
        }
        
      </div>
    </nav>
  );
};

export default Navbar;
