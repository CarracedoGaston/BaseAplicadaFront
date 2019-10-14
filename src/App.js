import React from 'react';
import './App.css';
import Table from './components/table'


class App extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      accion: ''
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

  renderSwitch (params) {
    switch(params){
      case 'Cliente':
        return 'http://localhost:5000/cliente'
      case 'Escribano':
        return 'http://localhost:5000/escribano'
      default:
        break
    }
  }

  render() {
    return (
      <div id="container">
        {this.state.accion===''?<div className="loading">Loading...</div>:<Table url = {this.renderSwitch(this.state.accion)} />}       
        <div id="buttons">
          <button onClick={this.clickCliente}>Cliente</button>
          <button onClick={this.clickEscribano}>Escribano</button>
        </div>
      </div>    
    )
  }
}

export default App;


