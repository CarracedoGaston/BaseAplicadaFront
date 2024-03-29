import React from 'react'
import './App.css'
import Nav from './components/nav'
import Table from './components/table'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App () { 
  return (
    <Router>
      <div id="container">
        <header><span>Base de Datos Aplicada I</span></header>
        <nav>
          <Nav />
        </nav>
        <main>
          <Switch>
            <Route exact path="/" render = {props => <div className="TitleInit"><h1 style={{color: 'white', fontFamily: 'monospace'}}>Esperando consulta...</h1></div>} />
            <Route path="/cliente" 
            render={(routerProps) => (<Table {...routerProps} url = 'cliente'/>)}
            />
            <Route path="/escribano" 
            render={(routerProps) => (<Table {...routerProps} url = 'escribano'/>)}
            />
            <Route path="/localidad" 
            render={(routerProps) => (<Table {...routerProps} url = 'localidad'/>)}
            />
            <Route path="/escritura" 
            render={(routerProps) => (<Table {...routerProps} url = 'escritura'/>)}
            />
          </Switch> 
        </main>
        <footer><span>Azzaretti && Carracedo</span></footer> 
      </div>   
    </Router>     
  )
}


export default App;


