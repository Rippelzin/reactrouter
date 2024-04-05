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
import Camera1 from './pages/Camera1.jsx'

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
            path:'camera',
            element: <Camera1 />
          }
        ]
      },
      
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='753294883060-2ofl1bmgnsm3rt6oaemg3cs15b9hlpdr.apps.googleusercontent.com'>
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
    
  </React.StrictMode>,
)
