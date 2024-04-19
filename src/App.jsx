import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import LogoComponent from './components/LogoComponent'
import { setAuthToken } from './hooks/useSetAuthToken'


function App() {

  const [showImage, setShowImage] = useState(true);


  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000); // 5000 milliseconds = 5 segundos

    //check jwt token
    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
        //console.log(token)
    }

    // Limpar o temporizador quando o componente for desmontado ou o estado da imagem mudar
    return () => clearTimeout(timer);
  }, [location]); // Executar o efeito apenas uma vez após a montagem do componente


  return (
    <div>
      {
        showImage ? (
              <LogoComponent/>
        ) : (
          <div>
            <Navbar />

            <Outlet />
          </div>
        )
      }
     
      
      
      
      
      
          
      

     

     
      
    </div>
  )
}

export default App
