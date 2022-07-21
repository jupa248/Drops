import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import AuthContextProvider from "./contexts/AuthContext";
import LandingPage from "./components/LandingPage";
import MyNotes from "./components/MyNotes";
import "./App.css"

// ! FALTA CRIAR OS PROTECTED ROUTES!!

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LandingPage/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/homepage" element={<HomePage/>} />
            <Route path="/my-notes" element={<MyNotes />} />
            <Route path="*" element={<Navigate to="/login" replace/>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
