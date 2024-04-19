import React from 'react'
import logoXrlab from "../assets/logovazadobranco.png"
import styles from "../styles/cardTermos.module.css"
import { useNavigate } from 'react-router-dom'

const CardTermos = () => {
    const navigate = useNavigate()
    function handleRedirect() {
        navigate("/world")
    }

    console.log("teste card termos")
  return (
    <div style={{display:"grid", alignItems:"center", justifyContent:"center", marginTop:"5vh"}} >
        <div className={styles.card}>
            <div style={{display:"grid", alignItems:"center", justifyContent:"center", }} >
                <img src={logoXrlab} alt="logovazadobranco" className={styles.logoXrlab} />
            </div>
            
            <div >
                <div className={styles.miniCard}>
                    <p >Favor consultar a poltica de privacidade de coneca 0.95 <br /> atualizada para obter informacoes adicionas sobre novoes reusroso socias</p>
                    <div style={{display:"grid", alignItems:"center", justifyContent:"center",}}s>
                        <button onClick={handleRedirect}>Ok</button>
                    </div>
                    
                    <a href="instagram.com">Politica de Privacidade</a>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default CardTermos