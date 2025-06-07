import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';

import { UserProvider, useUser } from './context/UserContext.jsx';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Register from './pages/Register.jsx';
import Cart from './pages/Cart.jsx';
import Pizza from './pages/Pizza.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';


const ProtectedRoute = ({ children }) => {
  const { token } = useUser();
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <div className="container flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </UserProvider>
  );
}

export default App;





/* version anterior
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider, useUser } from './context/UserContext.jsx';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pizza from './pages/Pizza';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// Componente de Rutas Protegidas
const ProtectedRoute = ({ children }) => {
  const { token } = useUser();
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div className="d-flex flex-column justify-content-between min-vh-100">
            <Navbar />
            <div className="d-flex justify-content-center align-items-center flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
*/