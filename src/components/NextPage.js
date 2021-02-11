
import React from 'react'
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import imageName from '../images/repair.jpg';
const NextPage = () => {
  let d =new Date();

    return (
          <Fragment>
        <nav className="navbar bg-dark">
        <h1>
          <Link to='/' style={{color:"blue"}}> Acceuil </Link>
        </h1>
        <ul>
          <li><Link to="#"><img src={imageName}  className="image"></img></Link></li>
          <li><Link to="#" className="pseudo"> Bonjour, John </Link></li>
          <li> <Link to="#"><input type="button" className="btn btn-primary" value={d.toLocaleDateString()} /></Link></li>
          <li><Link to="/"><i className="fa fa-sign-out " style={{color:"blue"}}></i> </Link></li>
        </ul>
      </nav>
            <div className="buttons">
              <Link to="mesInterventions" className="btn btn-light"><i className="fa fa-long-arrow-right" style={{color:"#34D1BF" }}  aria-hidden="true"></i> Mes interventions</Link>
              <Link to="#" className="btn btn-light2"><i className="fa fa-history" style={{color:"#34D1BF" }}></i> Historiques</Link>
            </div>
            <i class="fas fa-plus-circle" style={{color:'blue', margin:'41% 40% 40% 62%', fontSize:'50px'}} ></i>
            </Fragment>
    )

    
}

export default NextPage;
