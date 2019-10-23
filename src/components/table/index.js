import React from 'react'
import './style.css'

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      person: [],
      // url: `http://localhost:${process.env.PORT||5000}/api/`,
      url: '/api/',
      cliente: [],
      escribano : [],
      urlProps: this.props.url,
      color: null,
      biggestEscribano: 0,
      estadoCliente: false,
      clientSold: []
    } 
    this.BiggestEscribano = this.BiggestEscribano.bind(this)
    this.ClientHowSold = this.ClientHowSold.bind(this)
  }
  

  async componentDidMount() { 
    const url = `${this.state.url}${this.props.url}`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({person: data})
    const responseClie = await fetch(`${this.state.url}cliente`)
    const dataClie = await responseClie.json()
    this.setState({cliente: dataClie})
    const responseEsc = await fetch(`${this.state.url}escribano`)
    const dataEsc = await responseEsc.json()
    this.setState({escribano: dataEsc})
  }

  async componentDidUpdate(prevProps) { 
    if (this.props.url !== prevProps.url){
      const url = `${this.state.url}${this.props.url}`
      const response = await fetch(url)
      const data = await response.json()
      this.setState({person: data})
    }
  }

  nameColumn () {
    return (
      <div id="name">
        <div className="title">Name</div>
        {this.state.person.map(person => (
          <div key = {person._id} className="nameRow">
            {`${person.name}`}
          </div>
        ))}
      </div>
    )
  }

  lastNameColumn () {
    return (
      <div id="lastName">
        <div className="title">Last Name</div>
          {this.state.person.map(person => (
            <div key = {person._id} className="lastNameRow">
              {person.lastName}
            </div>
          ))}
      </div>
    )
  }

  cpColumn () {
    return (
      <div id="cp">
        <div className="title">Postal Code</div>
          {this.state.person.map(person => (
            <div key = {person._id} className="codigoRow">
              {`${person.codigo}`}
            </div>
          ))}
      </div>
    )
  }

  escrituraTipo () {
    return (
      <div id="escritura">
        <div id="tipo">
          <div className="title">Tipo</div>
            {this.state.person.map(person => (
              <div key = {person._id} className="tipoRow">
                {`${person.tipo}`}
              </div>
          ))}
        </div> 
        <div id="desc">
          <div className="title">Descripcion</div>
            {this.state.person.map(person => (
              <div key = {person._id} className="descRow">
                {`${person.descripcion}`}
              </div>
            ))}
        </div>   
        <div id="cliente">
          <div className="title">Cliente</div>
            {
              this.state.person.map( person => (this.state.clientSold.indexOf(person.cliente) >= 0)?
                (<div key = {person._id} className="clienteRow"  style={{backgroundColor:'green'}}>
                  {this.state.cliente.filter(client => client._id === person.cliente).map(client => client.lastName)}
                </div>):
                (<div key = {person._id} className="clienteRow"  style={{backgroundColor:''}}>
                  {this.state.cliente.filter(client => client._id === person.cliente).map(client => client.lastName)}
                </div>))
            }
        </div>   
        <div id="escribano">
          <div className="title">Escribano</div>
              {this.state.person.map(person => 
                person.escribano===this.state.biggestEscribano?(
                <div key = {person._id} className="escribanoRow" style={{backgroundColor:'green'}}>
                  {this.state.escribano.filter(element => element._id === person.escribano).map(element => element.lastName)}
                </div>
                ):
                (<div key = {person._id} className="escribanoRow" style={{backgroundColor:''}}>
                  {this.state.escribano.filter(element => element._id === person.escribano).map(element => element.lastName)}
                </div>)
              )}
        </div>   
      </div>
    )
  }

  jsxTable () {
    switch(this.props.url){
      case ('localidad'):
        return this.cpColumn()
      case('escritura'):
        return this.escrituraTipo()
      default:
        return this.lastNameColumn()
    }
  }

  BiggestEscribano() {
    let array = this.state.person.map(person => (this.state.escribano.filter(element => element._id === person.escribano).map(element => element.lastName)))
    let ObjectBiggest = {
      lastname: '',
      count: 0
    }
    let count = 0
    for (let j = 0; j < array.length; j++){
      for(let i = 0; i < array.length; i++){
        if (array[i][0] === array[j][0]){
          count ++
        }
      }
      if(count > ObjectBiggest.count) {
        ObjectBiggest.count = count
        ObjectBiggest.lastname = array[j][0]
      }
      count = 0
    }
    this.state.escribano.forEach(element => {
      if(element.lastName === ObjectBiggest.lastname){
        return this.setState({biggestEscribano: element._id})
      }
    })
    if(this.state.biggestEscribano !== 0){
      this.setState({biggestEscribano: 0})
    }
  }

  ClientHowSold() {
    if(this.state.estadoCliente === false){
      let arrayCliente = []
      console.log(this.state.clientSold)
      for (let j = 0; j < this.state.person.length; j++){
        if(this.state.person[j].tipo === 'Venta'){
          arrayCliente.push(this.state.person[j].cliente)
        }
      }
      this.setState({clientSold: arrayCliente})
      this.setState({estadoCliente: true})
    }
    else {
      this.setState({clientSold: []})
      this.setState({estadoCliente: false})
    }
  }

  render () {
    return ( 
      <>
        <div id="table">
          {this.props.url!=='escritura'?this.nameColumn():null}
          {this.jsxTable()}
        </div>
        {this.props.url==='escritura'?(
        <div className="buttons">
          <button  onClick={this.BiggestEscribano}>Escribano con mas escrituras</button>
          <button  onClick={this.ClientHowSold}>Clientes que vendieron</button>
        </div>):null}
      </>
    )
  }
}

export default Table