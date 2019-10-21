import React from 'react'
import './style.css'

class Table extends React.Component {
  state = {
    person: [],
    url: 'http://localhost:5000/api/',
    cliente: [],
    escribano : []
  }

  async componentDidMount() { 
    const url = `${this.state.url}${this.props.url}`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({person: data})
    if(`${this.props.url}`==='escritura'){
      const response = await fetch(`${this.state.url}cliente`)
      const data = await response.json()
      this.setState({cliente: data})
      const responseEsc = await fetch(`${this.state.url}escribano`)
      const dataEsc = await responseEsc.json()
      this.setState({escribano: dataEsc})
    }
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
            {this.state.person.map(person => (
              <div key = {person._id} className="clienteRow">
                {this.state.cliente.filter(element => element._id === person.cliente).map(element => element.lastName)}
              </div>
            ))}
        </div>   
        <div id="escribano">
          <div className="title">Escribano</div>
            {this.state.person.map(person => (
              <div key = {person._id} className="escribanoRow">
                {this.state.escribano.filter(element => element._id === person.escribano).map(element => element.lastName)}
              </div>
            ))}
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

  render () {
    return ( 
      <div id="table">
        {this.props.url!=='escritura'?this.nameColumn():null}
        {this.jsxTable()}
        {}
      </div>
    )
  }
}

export default Table