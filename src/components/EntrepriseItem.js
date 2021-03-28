import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {MYKEY} from '../SecurityConfig/config'
import Map from './Map'

const EntrepriseItem = ({entreprise:{
    siret,
    stars,
    name,
    address,
    lon,
    lat

}}) => {

 
    //disolaying the result in map for that  
    //ew need access to a map service, like Google Maps.
   console.log(lat,lon)
    return (
        <Fragment>
        <div className=" bg-dark ">

        <br></br>
          <hr/>
        <div >
            <h2 className="my-2 ">Nom :  {' '} {name}</h2>
            <p className="my-2 lead"> Nombre des stars: {' '} {stars}</p>
            <p className="my-2 lead"><span>L'adresse : {' '} {address}</span></p>
        </div  >
        <div style={{ border: "3px solid black", display: 'flex', height: 500 }} >
          {lat && lon ?
           <Map data={{lat, lon}}></Map>
          :
            <div> {lat}{' '} {lon}  </div>
          }
             
            </div>
           
    </div>

           </Fragment> 
           
    )
}

EntrepriseItem.propTypes = {
entreprise:PropTypes.object.isRequired,
}

export default EntrepriseItem
