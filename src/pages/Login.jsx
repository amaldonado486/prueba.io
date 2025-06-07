import React, { useState } from 'react';
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";


const Login = ({ onBackToHome }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useUser();

  const handleLogin = async (e) => { 
    e.preventDefault();
    setErrorMessage('');
    
    console.log('Login valida');
    if (!email || !password) {
      setErrorMessage('Todos los campos son obligatorios.');
    } else if (password.length < 6) {
      setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
    } else {
      setLoading(true);
      try {
        await login(email, password);
        alert('¡Autenticación exitosa!');
      } catch (error) {
        setErrorMessage('Error de autenticación. Verifica tus credenciales.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="bg-white p-5 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">Login</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-100 mb-3" disabled={loading}>
            {loading ? 'Cargando...' : 'Login'}
          </button>
          
          <Link to={`/`} className="btn btn-secundary w-100 mb-3">
          Voler al Home
        </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;


