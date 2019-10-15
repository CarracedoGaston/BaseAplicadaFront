import React from 'react';
import './App.css';
import Nav from './components/nav'
import Table from './components/table'
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
            <Route path="/cliente" 
            render={(routerProps) => (<Table {...routerProps} url = {'http://localhost:5000/cliente'}/>)}
            />
            <Route path="/escribano" 
            render={(routerProps) => (<Table {...routerProps} url = {'http://localhost:5000/escribano'}/>)}
            />
            <Route path="/localidad" 
            render={(routerProps) => (<Table {...routerProps} url = {'http://localhost:5000/localidad'}/>)}
            />
          </Switch>  
        </div>   
      </Router>
       
    )
  }
}

export default App;


