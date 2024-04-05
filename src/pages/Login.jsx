import React from "react";
import {GoogleLogin} from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"; //{jwtDecode} - funciona / jwt_decode - nao funciona

const Login = () => {
    return(
        <div>
            <GoogleLogin 
            onSuccess={(credentialResponse) => {
                const credentialDecode = jwtDecode(credentialResponse.credential);
                console.log(credentialDecode)
            }}
            onError={() => { 
            console.log("login falied")
            }
        }
            />
        </div>
    )
}
export default Login