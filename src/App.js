import React from 'react';
import './App.css';
import Cliente from './components/cliente'
import Escribano from './components/escribano'
import Localidad from './components/localidad'
import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      accion: ''
    }
  }

  render() {
    return (
      <Router>
        <div id="container">
          <Nav />
          <Switch>
            <Route path="/cliente" component={Cliente}/>
            <Route path="/escribano" component={Escribano}/>
            <Route path="/localidad" component={Localidad}/>
          </Switch>  
        </div>   
      </Router>
       
    )
  }
}

export default App;


