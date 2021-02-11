import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import imageName from '../images/repair.jpg';


const HomePage = () => {
  let d =new Date();
    return (
      <Fragment>
        <nav className="navbar bg-dark">
        <h1>
          <Link to={`/`} style={{color:"blue"}}> Mes interventions</Link>
        </h1>
        <ul>
          <li><Link to="#"><img src={imageName} className="image"></img></Link></li>
          <li><Link to="#"className="pseudo"> Bonjour,john </Link></li>
          <li> <Link to="#"><input type="button" className="btn btn-primary" value={d.toLocaleDateString()} /></Link></li>
          
          <li><Link to="/"><i className="fa fa-sign-out " style={{color:"blue"}}></i> </Link></li>
        </ul>
      </nav>
      <i class="fas fa-plus-circle" style={{color:'blue', margin:'41% 40% 40% 62%', fontSize:'50px'}} ></i>
      </Fragment>
    )
}



export default HomePage;
