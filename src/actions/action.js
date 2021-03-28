import axios from 'axios'
import {CLIENT_ID,SECRET} from '../SecurityConfig/config'

 
 export const getToken =  async () =>{
     
    localStorage.removeItem('Access-token')
        
    const config ={
      headers:{
        'Content-Type': "application/x-www-form-urlencoded",
         'Access-Control-Allow-Origin':'*'
         }
    }
    let url='https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=/partenaire';
    var params = new URLSearchParams();
    params.append('grant_type', "client_credentials");
    params.append('client_id', CLIENT_ID);
    params.append('client_secret',SECRET );
    params.append('scope',"application_"+CLIENT_ID+" api_labonneboitev1");

       await axios.post(url,params,config)
      .then((res) => {
         
          localStorage.setItem('Access-token',res.data.access_token);
         
      })
      .catch((err) => {
          console.log(err);
      });
}  
