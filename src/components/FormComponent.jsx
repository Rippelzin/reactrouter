import React, { useState } from "react";
import axios from "axios";
import style from "../styles/formComponent.module.css"

const FormComponent= () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

function handleFormSubmit(e){
    e.preventDefault();

    axios.post("/endpoint", {
        "username": name,
        "password": password
    })
    .then(function(response){
        console.log(response)
    }  
    )

    console.log("teste")
}

    return(
        <div className={style.formcomponent}>
            <div className={style.logo}>LOGO</div>
            <form onSubmit={handleFormSubmit} className={style.formcard}>
                <div style={{display: "grid"}}>
                    <label htmlFor="nameInput" className={style.placeholder} >NOME</label>
                    <input type="text" className={style.input} id="nameInput" onChange={(e) => setName(e.target.value)} />
                </div>
                
                <div style={{display: "grid"}}>
                    <label htmlFor="passwordInput" className={style.placeholder}>SENHA</label>
                    <input type="text" className={style.input}  id="passwordInput" onChange={(e) => setPassword(e.target.value)} />
                </div>
                

                <input type="submit" style={{margin: "2vh"}} className={style.submitbutton}/>
            </form>
        </div>
    )
}

export default FormComponent