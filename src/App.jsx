import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom';
import LogoComponent from './components/LogoComponent'


function App() {

  const [showImage, setShowImage] = useState(true);
  let location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000); // 5000 milliseconds = 5 segundos

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
