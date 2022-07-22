import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import AuthContextProvider from "./contexts/AuthContext";
import LandingPage from "./components/LandingPage";
import MyNotes from "./components/MyNotes";
import "./App.css"
import { AuthContext } from "./contexts/AuthContext";

// ! FALTA CRIAR OS PROTECTED ROUTES!!
//create protected routes
// const ProtectedRoute = ({ element, ...rest }) => {
//   const { auth } = React.useContext(AuthContext);

//   const navigate = useNavigate();

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth ? (
//           element
//         ) : (
//           navigate("/login", { replace: true })
//         )
//       }
//     />
//   );
// }


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LandingPage/>} />
            <Route path="/signup" element={<Signup/>} />
              <Route path="/homepage" element={<HomePage/>} />
              <Route path="/my-notes" element={<MyNotes/>} />
            <Route path="*" element={<Navigate to="/login" replace/>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}
           
          
     
        

export default App;
