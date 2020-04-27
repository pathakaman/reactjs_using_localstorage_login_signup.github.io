import React,{Component} from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Sign_up from './Sign_up';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Menu from './Menu';
export default class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/signup" component={Sign_up}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/logout" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/services" component={Services}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
