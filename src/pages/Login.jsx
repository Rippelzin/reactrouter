import React from "react";
import {GoogleLogin} from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"; //{jwtDecode} - funciona / jwt_decode - nao funciona
import FormComponent from "../components/FormComponent";
import styles from "../styles/login.module.css";

import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    function handleRedirect(){
        navigate("/cadastro")
    }

    return(
        <div className={styles.body} >
            <FormComponent />

            <div style={{marginBottom: "1vh", marginTop: "-6vh", textAlign:"center", fontSize:"4vh", fontWeight:"bolder"}}> OU </div>
            
            <div className={styles.googlebtn_card}>
                <div className={styles.googlebtn}>
                        <GoogleLogin 
                        onSuccess={(credentialResponse) => {
                            const credentialDecode = jwtDecode(credentialResponse.credential);
                            console.log(credentialDecode)
                            navigate("/world")
                        }}
                        onError={() => { 
                        console.log("login falied")
                        }
                    }
                        />
                </div>
            
            </div>
            <div className={styles.btn_redirect}>
                <button  onClick={handleRedirect} > Nao Possui Cadstro ainda? Cadastre-se Aqui </button>
                
            </div>
            
            
        </div>
    )
}
export default Login