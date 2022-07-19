import React, {useEffect} from "react";
import axios from 'axios';
import { config } from "../helpers/auth";
import Cookies from "js-cookie";

export const AuthContext = React.createContext(null);

export default function AuthContextProvider(props) {
  const [auth, setAuth] = React.useState(false);
  const [user, setUser] = React.useState({})
  useEffect(() => {
    axios.get('/auth/verify-token', config ).then((response) => {
      setUser(response.data)
      setAuth(true)
    }).catch((error) => {
        setAuth(false)
        Cookies.remove('user_token')
    })
  },[])
  
  return (
    <AuthContext.Provider 
      value={{
          auth, 
          setAuth, 
          user, 
          setUser}}>
      {props.children}
    </AuthContext.Provider>
  );
}
