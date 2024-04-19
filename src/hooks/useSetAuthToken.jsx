import axios from 'axios';
 
export const setAuthToken = token => {
   if (token) {
    //set o deafult header para toads as requisicoes como o valor = `Bearer ...token`
       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
       //console.log('foi chamado')
   }
   else
       delete axios.defaults.headers.common["Authorization"];
}