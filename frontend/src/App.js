import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateNote from "./pages/CreateNote";
import Note from "./pages/Note";
import Navbar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAppContext } from "./contexts/AppContext";
import MyNotes from "./pages/MyNotes";
import "./index.css";

const App = () => {
  const { user } = useAppContext();
  return (
    <BrowserRouter>
      {user && <Navbar />}
      <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {!user && <Route path="/register" element={<Register />} />}
        {!user && <Route path="/login" element={<Login />} />}
        <Route
          path="/create-notes"
          element={
            <ProtectedRoute>
              <CreateNote />
            </ProtectedRoute>
          }
        />
        <Route
          path="/note/:id"
          element={
            <ProtectedRoute>
              <Note />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-notes"
          element={
            <ProtectedRoute>
              <MyNotes />
            </ProtectedRoute>
          }
        />
        {!user && <Route path="*" element={<Navigate to="/login" replace />} />}
        {user && <Route path="*" element={<Navigate to="/home" replace />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
