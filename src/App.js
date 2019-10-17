import React from 'react'
import './App.css'
import Nav from './components/nav'
import Table from './components/table'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component { 
  render() {
    return (
      <Router>
        <div id="container">
          <header><span>Base de Datos Aplicada I</span></header>
          <nav>
            <Nav />
          </nav>
          <main>
            <Switch>
              <Route path="/cliente" 
              render={(routerProps) => (<Table {...routerProps} url = 'cliente'/>)}
              />
              <Route path="/escribano" 
              render={(routerProps) => (<Table {...routerProps} url = 'escribano'/>)}
              />
              <Route path="/localidad" 
              render={(routerProps) => (<Table {...routerProps} url = 'localidad'/>)}
              />
            </Switch> 
          </main>
          <footer><span>Azzaretti && Carracedo</span></footer> 
        </div>   
      </Router>     
    )
  }
}

export default App;


