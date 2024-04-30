import React, { useState } from "react";
import axios from "axios";
import style from "../styles/formComponent.module.css"
import { useNavigate } from "react-router-dom";

const FormComponent= () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

function handleFormSubmit(e){
    e.preventDefault();
    
    

    axios.post("/token", {
        "username": name,
        "password": password
    })
    .then(function(response){
        //pega toekn
       const token  =  response.data.token;
 
       //set token
       localStorage.removeItem("token");
        
       //set token to headeer for every request(acho)
       setAuthToken(token);

        navigate("/world")
    })
    .catch(err => console.log(err));
}

    return(
        <div className={style.formcomponent}>

            <div className={style.logo}>LOGO</div>
            <h2 >LOGIN</h2>

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