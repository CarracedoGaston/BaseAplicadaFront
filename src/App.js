import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cliente from './components/cliente'
import Escribano from './components/escribano'


class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      accion: "loading"
    }
    this.clickCliente = this.clickCliente.bind(this)
    this.clickEscribano = this.clickEscribano.bind(this)
  }
 
  clickCliente() {
    this.setState({accion: 'Cliente'})
  }
  
  clickEscribano() {
    this.setState({accion: 'Escribano'})
  }

    render() {
      return (
        <div id="container">
          {(this.state.accion=="Cliente")?<Cliente />: <Escribano />}
          <button onClick={this.clickCliente}>Cliente</button>
          <button onClick={this.clickEscribano}>Escribano</button>
        </div>    
      )
    }
  }

export default App;


