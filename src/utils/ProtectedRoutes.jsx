import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    //let auth = {'token':true}

    function hasJWT() {
      let hasToken = false;

      //check user has JWT token
      //localStorage.removeItem("token")
      localStorage.setItem("token", 213)
      localStorage.getItem("token") ? hasToken=true : hasToken=false
     
      return hasToken
  }


    return (
      //usa o hasJWT para verificar se o user pode acessar ou nao
        hasJWT() ? <Outlet/> : <Navigate to='/login'/>
      )
    }
export default ProtectedRoutes