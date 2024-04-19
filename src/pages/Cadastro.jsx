import React, { useEffect } from 'react'
import style from '../styles/formComponent.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CardTermos from '../components/CardTermos'
import AvatarsComponent from '../components/AvatarsComponent'
import IdadeComponent from '../components/IdadeComponent'

const Cadastro = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const [showPopUp, setShowPopUp] = useState(false)

    function handleRedirect(){
        navigate("/login")
    }

    function handleBeginSignUp(e){
        e.preventDefault()

        //jogar depois do sucess do post
        setShowPopUp(!showPopUp)

    }

    function handleSignUp(){
        const age = localStorage.getItem("age")
        const avatar = localStorage.getItem("avatar")
        
        axios.post('/users', {
            "nickname": name,
            "password": password,
            "selectedAvatar": avatar,
            "xp": 10
            //"age": age
            
        })
        .then(response => {
            //set token tbm

            //fazer redirecionamento aqui !!
            
            
            
        })
        .catch(error => console.log(error))
    }

    let componente ;
    const [etapaCadastro, setEtapaCadastro] = useState(1)
    if(etapaCadastro === 1){
        componente = <CardTermos/>
    } else if (etapaCadastro === 2){
        componente = <AvatarsComponent />
    } else if(etapaCadastro === 3 && !localStorage.getItem("avatar")){
        window.alert("escolha um avatar")
        setEtapaCadastro(2)
    } else if(etapaCadastro === 3 && localStorage.getItem("avatar")){
        componente = <IdadeComponent />
    } else if(etapaCadastro === 4){
        handleSignUp()
        //puxar funcao de http post cadastro
        navigate("/world")
    }

    useEffect(() => {
        localStorage.removeItem("token")
        if(localStorage.getItem("token")) {
            navigate("/world")
        }
    })

  return (
    <div>
        {
            showPopUp ? (
            <div>
                {componente}
                <div style={{display:"grid", alignItems:"center", justifyContent:"center"}}>
                    <button onClick={() => setEtapaCadastro(etapaCadastro + 1) }
                    style={{fontSize: "3vh", marginTop: "-9vh", backgroundColor:"black", color:"white"}}
                    >
                         Avancar 
                    </button>
                </div>
                
            </div>
            ) : (
                <div>
                            <h1>Cadastra-se</h1>
        <form onSubmit={handleBeginSignUp} className={style.formcard}>
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