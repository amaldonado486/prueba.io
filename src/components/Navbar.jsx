/*import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext"; 

const Navbar = () => {
  const { total } = useCart(); // Total del carrito
  const { token, logout } = useUser(); // Token de sesión y logout

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mia</Link>
        <div>
          {token ? (
            <>
              <Link className="btn btn-warning mx-1" to="/profile">Perfil</Link>
              <button className="btn btn-danger mx-1" onClick={logout}>Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link className="btn btn-warning mx-1" to="/login">🔐 Login</Link>
              <Link className="btn btn-warning mx-1" to="/register">📝 Register</Link>
            </>
          )}
          <Link className="btn btn-warning mx-1" to="/cart">
            🛒 Carrito <span className="badge bg-danger">${total.toFixed(2)}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/

import { useContext } from "react";
import { UserContext } from "../context/UserContext"; // Importa UserContext
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  const { total } = useCart(); // Total del carrito
    

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mia</Link>
        <div>
          <Link className="btn btn-warning mx-1" to="/cart">
          🛒 Carrito 
            <span className="badge bg-danger">${total.toFixed(2)}</span> </Link> 
          {token ? (
            <>
              <Link className="btn btn-warning mx-1" to="/profile">Perfil</Link>
              <button className="btn btn-danger mx-1" onClick={logout}>Cerrar sesión</button>
            </>
          ) : (
            <Link className="btn btn-warning mx-1" to="/login">🔐 Iniciar sesión</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



  
  /*return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mia</Link>
        <div>
          {token ? (
            <>
              <Link className="btn btn-warning mx-1" to="/profile">Profile</Link>
              <button className="btn btn-danger mx-1" onClick={logout}>Cerrar Sesión</button>
            </>
          ) : (
            <>
              <Link className="btn btn-warning mx-1" to="/login">🔐 Login</Link>
              <Link className="btn btn-warning mx-1" to="/register">📝 Register</Link>
            </>
          )}
          <Link className="btn btn-warning mx-1" to="/cart">
            🛒 Carrito <span className="badge bg-danger">${total.toFixed(2)}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/
