import axios from "axios";
import { CLIENT_ID, SECRET } from "../SecurityConfig/config";


//fonction de récupération de token depuis L'API
export const getToken = async () => {
  const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
       // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": true,
        // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    }
  };
  let url =
    "https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=/partenaire";
  var params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", CLIENT_ID);
  params.append("client_secret", SECRET);
  params.append("scope", "application_" + CLIENT_ID + " api_labonneboitev1");

  await axios
    .post(url, params, config)
    .then((res) => {
      //stocker le token dans le navigateur 
      localStorage.setItem("Access-token", res.data.access_token);
      console.log(res.data.access_token);
    })
    .catch((err) => {
      console.log(err);
    });
};


// fonction qui permet de récupérer la liste des entreprises depuis L'API
export const getCompanies = async (
  lat,
  lng,
  distance,
  commune_id,
  setEntreprises
) => {
 // console.log("TRACE TECHNIQUE");

  //get the access token

  var myToken = localStorage.getItem("Access-token");

  const config = {
    headers: {
      Authorization: "Bearer "+myToken,
          // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": true,
        // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    },
  };

  // paramétres correspond au critères données
  await axios
    .get(
      `https://api.emploi-store.fr/partenaire/labonneboite/v1/company/?page_size=100&distance=${distance}&latitude=${lat}&longitude=${lng}&rome_codes=M1805&commune_id=${commune_id}&naf-codes=6209Z`,
      config
    )
    .then((res) => {
      console.log(res.data.companies);
      setEntreprises(res.data.companies);
    })
    .catch((err) => {
      console.log(err);
    });
};
