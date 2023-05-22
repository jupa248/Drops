import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;

  const [user, setUser] = useState(initialUser);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:5000";
  const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

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
      const { token, user } = response.data;

      // Store the user in localStorage
      localStorage.setItem("user", JSON.stringify(user));

      // Set the Authorization header for subsequent requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUser(user);
      console.log("User logged in successfully");
      return response; // Return the response data for handling in the Login component
    } catch (error) {
      console.log("Login error:", error);
      throw error; // Throw the error for handling in the Login component
    }
  };

  const fetchUser = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/users/${userId}`);
      const user = response.data;

      setUser(user);
    } catch (error) {
      console.log("Fetch user error:", error);
    }
  };

  const fetchNotes = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/notes/${userId}`);
      const notes = response.data;
      setNotes(notes);
    } catch (error) {
      console.log("Fetch notes error:", error);
    }
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${parsedUser.token}`;
    }
    setLoading(false);
  }, []);

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/logout`);
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const createNote = async (noteData) => {
    try {
      const response = await axios.post(`${API_URL}/notes`, noteData);
      const data = response.data;
      setNotes([...notes, data]); // Update the notes state with the new note
      await fetchNotes(); // Fetch the updated notes from the server
    } catch (error) {
      console.log(error);
    }
  };

  const updateNotes = async (noteId, updatedData) => {
    try {
      await axios.put(`${API_URL}/notes/${noteId}`, updatedData);
      const updatedNotes = notes.map((note) =>
        note.id === noteId ? { ...note, ...updatedData } : note
      );
      setNotes(updatedNotes);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      await axios.delete(`${API_URL}/notes/${noteId}`);
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        fetchUser,
        loading,
        setUser,
        notes,
        register,
        login,
        logout,
        fetchNotes,
        createNote,
        updateNotes,
        deleteNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
