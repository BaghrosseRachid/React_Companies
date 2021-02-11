import {Fragment} from 'react'
import './App.css';
import HomePage from './components/HomePage';
import  {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import NextPage from './components/NextPage';
import Star from './components/Star'
function App() {
  return (
    
    <Router>
    <Fragment>
    <Star/> 
    <Route exact path='/' component={NextPage}/>
    <section className="container">
    <Switch>
   <Route exact path='/mesInterventions' component={HomePage}/>
   <Route exact path='/historiques' />
   </Switch>
   </section >
 </Fragment> 
 </Router>
  );
}

export default App;
