import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import AuthContextProvider from "./contexts/AuthContext";
import LandingPage from "./components/LandingPage";
import MyNotes from "./components/MyNotes";
import "./App.css"
import { AuthContext } from "./contexts/AuthContext";
import CreateNotes from "./components/CreateNotes";
import SingleNote from "./components/SingleNote";

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
              <Route path="/create-notes" element={<CreateNotes/>} />
              <Route
                  path="/my-notes/:id"
                  element={<SingleNote />}
                />
              {/* <Route path="/wish" element={<WishList/>} /> */}
              {/* <Route path="/dictionary" element={<Dictionary/>} /> */}
            <Route path="*" element={<Navigate to="/login" replace/>} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}
           
          
     
        

export default App;
