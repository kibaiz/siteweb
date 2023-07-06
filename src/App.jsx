import React from 'react';
import Header from './components/Header/Header';
import './index.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Echange from './components/Echange/Echange';
import Documentation from './components/Documentation/Documentation';
import Information from './components/Information/Information';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
const App = () =>{
  return(
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/echange" component={Echange}/>
        <Route exact path="/documentation" component={Documentation}/>
        <Route exact path="/information" component={Information}/>
        <Route exact path="/Contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  );
}
export default App;
