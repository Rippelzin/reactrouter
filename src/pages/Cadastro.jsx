import React from 'react'
import style from '../styles/formComponent.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CardTermos from '../components/CardTermos'

const Cadastro = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const [showPopUp, setShowPopUp] = useState(false)

    function handleRedirect(){
        navigate("/login")
    }

    function handleSignUp(e){
        e.preventDefault()

        //jogar depois do sucess do post
        setShowPopUp(!showPopUp)

        axios.post('/userse', {
            "nickname": name,
            "password": password,
            "selectedAvatar": "avatar",
            "xp": 10
        })
        .then(response => {
            //set token tbm
            
            
            
        })
        .catch(error => console.log(error))
    }

    

  return (
    <div>
        {
            showPopUp ? (
            <div>
                <CardTermos/>
            </div>
            ) : (
                <div>
                            <h1>Cadastra-se</h1>
        <form onSubmit={handleSignUp} className={style.formcard}>
                <div style={{display: "grid"}}>
                    <label htmlFor="nameInput" className={style.placeholder} >NOME</label>
                    <input type="text" className={style.input} id="nameInput" onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div style={{display: "grid"}}>
                    <label htmlFor="passwordInput" className={style.placeholder}>SENHA</label>
                    <input type="password" className={style.input}  id="passwordInput" onChange={(e) => setPassword(e.target.value)} />
                </div>
                
                

                <input type="submit" style={{margin: "2vh"}} value="Cadastrar-se" className={style.submitbutton}/>
            </form>
            <div className={style.btn_redirect}>
                <button onClick={handleRedirect}> Ja possui cadastro? Faca seu Login aqui!</button>
            </div>
                </div>
            )
        }
        
            
            
    </div>
  )
}

export default Cadastro