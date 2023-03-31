import React from 'react';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import {Route, Switch, Redirect} from 'react-router-dom';
const App = () =>{
  return(
    <>
      <Switch>
        <Route exact  path="/" component={Home} />
        <Route exact  path="/service" component={Service} />
        <Route exact  path="/about" component={About} />
        <Route exact  path="/contact" component={Contact} />
        <Redirect to="/"/>
      </Switch>
    </>
  );
}
export default App;
