import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const saveAuthData = (token, email) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setToken(token);
    setEmail(email);
  };

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        saveAuthData(data.token, email);
      }
    } catch (error) {
      console.error("Error en login", error);
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        saveAuthData(data.token, email);
      }
    } catch (error) {
      console.error("Error en register", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    setEmail("");
  };

  const getProfile = async () => {
    if (!token) return;
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setEmail(data.email);
      }
    } catch (error) {
      console.error("Error obteniendo perfil", error);
    }
  };

  useEffect(() => {
    if (token) getProfile();
  }, [token]);

  return (
    <UserContext.Provider value={{ token, email, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
