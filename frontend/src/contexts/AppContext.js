import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const storedUser = localStorage.getItem('user');
  const initialUser = storedUser ? JSON.parse(storedUser) : null;

  const [user, setUser] = useState(initialUser);
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');

  const API_URL = 'http://localhost:5000';
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const axiosRequest = async (method, url, data = null) => {
    try {
      const response = await axios({
        method,
        url: `${API_URL}/${url}`,
        data,
        headers: config.headers,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await axiosRequest('post', 'register', userData);
      const data = response.data;

      if (response.status === 201) {
        setUser(data.user);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error.response.data.message;
    }
  };

  const login = async (credentials) => {
    try {
      const response = await axiosRequest('post', 'login', credentials);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser(user);

      return response;
    } catch (error) {
      const errMsg = error.response.data.message;
      throw errMsg;
    }
  };

  const fetchUser = async (userId) => {
    try {
      const response = await axiosRequest('get', `users/${userId}`);
      const user = response.data;

      setUser(user);
    } catch (error) {
      throw error;
    }
  };

  const fetchNotes = async (userId) => {
    try {
      const response = await axiosRequest('get', `notes/${userId}`);
      const notes = response?.data;
      return notes;
    } catch (error) {
      return error;
    }
  };

  const logout = async () => {
    try {
      await axiosRequest('post', 'logout');
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  const createNote = async (noteId, noteData) => {
    try {
      const response = await axiosRequest('post', `notes/${noteId}`, noteData);
      const data = response.data;
      setNotes([...notes, data]);
      return { success: true, message: 'Note created successfully' };
    } catch (err) {
      const error = err.response.data.error;
      setError(error);
      console.log('error', error);
      return { success: false, message: 'Failed to create the note', error };
    }
  };

  const getNote = async (noteId) => {
    try {
      const response = await axiosRequest('get', `note/${noteId}`);

      return response.data;
    } catch (error) {
      return error;
    }
  };

  const updateNotes = async (noteId, updatedData) => {
    try {
      await axiosRequest('put', `notes/${noteId}`, updatedData);
      const updatedNotes = notes.map((note) =>
        note.id === noteId ? { ...note, ...updatedData } : note,
      );
      setNotes(updatedNotes);
    } catch (error) {
      throw error;
    }
  };

  const deleteNote = async (noteId) => {
    try {
      await axiosRequest('delete', `notes/${noteId}`);
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
        setUser,
        notes,
        register,
        login,
        logout,
        fetchNotes,
        createNote,
        error,
        setError,
        getNote,
        updateNotes,
        deleteNote,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
