import React, { useState } from 'react'
import styles from "../styles/avatarsComponet.module.css"
import boyAvatar from "../assets/boy_avatar.png"
import girlAvatar from  "../assets/girl_avatar.png"


const AvatarsComponent = () => {
    const [avatar, setAvatar] = useState("")

    //ou criar um local item pra salvar o avatar escolhido
    localStorage.removeItem("avatar")
    
  return (
    <div style={{backgroundColor: "rgb(128, 229, 130)"}}>
        <div style={{display:"grid", alignItems:"center", justifyContent:"center"}}>
            <h1 style={{color:"white"}}>Escolha Seu Estilo</h1>
        </div>
        

        <div className={styles.avatarsCard}>
            <img src={boyAvatar} alt="" onClick={() => localStorage.setItem("avatar" , 1)} />
            <img src={girlAvatar} alt="" onClick={() => localStorage.setItem("avatar" , 2)} />
        </div>
    </div>
  )
}

export default AvatarsComponent