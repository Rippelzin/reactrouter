import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import Login from './pages/Login.jsx'

import {GoogleOAuthProvider} from "@react-oauth/google"
import JogoPage from './pages/JogoPage.jsx'
import Cadastro from './pages/Cadastro.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        element: <ProtectedRoutes/>, //englobo uma lista de componentes/paginas com o protected para proteger e redirecionar
        children: [
          {
            path:'/',
            element: <Home />
          },
          {
            path:'contact', //nao bota /contact, so contact mesmo, o barra ta no parent ali em cima
            element: <Contact />
          },
          {
            path:'world',
            element: <JogoPage />
          },
          {
            path:'cadastro',
            element: <Cadastro />
          }
        ]
      },
      
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GoogleOAuthProvider clientId='753294883060-2ofl1bmgnsm3rt6oaemg3cs15b9hlpdr.apps.googleusercontent.com'>
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
    
  </>,
)
