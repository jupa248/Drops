import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const API_URL = "http://localhost:5000";

  const register = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      const data = response.data;

      if (response.status === 201) {
        setUser(data.user);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials);
      const data = response.data;

      if (response.status === 200) {
        setUser(data.user);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/logout`);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
