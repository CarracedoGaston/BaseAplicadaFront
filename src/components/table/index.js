import React from 'react'
import './style.css'

class Table extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      person: [],
      url: 'http://localhost:5000/api/',
      cliente: [],
      escribano : [],
      color: null
    } 
    this.changecolor = this.changecolor.bind(this)
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
            {this.state.person.map(person => (
              <div key = {person._id} className="clienteRow">
                {this.state.cliente.filter(element => element._id === person.cliente).map(element => element.lastName)}
              </div>
            ))}
        </div>   
        <div id="escribano">
          <div className="title">Escribano</div>
            {/* {this.state.person.map(person => (
              <div key = {person._id} className="escribanoRow" style={{backgroundColor:this.state.color}}>
                {this.state.escribano.filter(element => element._id === person.escribano).map(element => element.lastName)}
              </div>
            ))} */}
              {this.state.person.map(person => 
                person.escribano==='5d9d2511037130456cee65c7'?(
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

  changecolor() {
    if(this.state.color === 'blue'){
      this.setState({color: 'black'})
    }else{
      this.setState({color: 'blue'})
    }
  }

  render () {
    return ( 
      <>
        <div id="table">
          {this.props.url!=='escritura'?this.nameColumn():null}
          {this.jsxTable()}
          {/* {this.state.color? this.jsxTableColor(): this.jsxTable() } */}
        </div>
        <div>
          <button onClick={this.changecolor}>Escribanos con mas de 3 escrituras</button>
        </div>
      </>
    )
  }
}

export default Table