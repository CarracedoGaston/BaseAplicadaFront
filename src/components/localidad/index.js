import React from 'react';

class Localidad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      person: [],
      url: 'http://localhost:5000/localidad'
    }
    this.idClick = this.idClick.bind(this)
  }
 
  async componentDidMount() { 
    const url = `${this.state.url}`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({person: data})
  }

  idClick () {
    this.setState({url: 'http://localhost:5000/localidad/5d9ce78aa85fc607901d7996'})
  }


  render () {
    return ( 
      <div className="main">
        <div id="table">
          <div id="name">
            <div className="title">Name</div>
            {this.state.person.map(person => (
              <div key = {person._id} className="nameRow">
              {`${person.name}`}
              </div>
            ))}
          </div>
          <div id="cp">
            <div className="title">Codigo</div>
            {this.state.person.map(person => (
              <div key = {person._id} className="codigoRow">
              {`${person.codigo}`}
              </div>
            ))}
          </div>
        </div>
        <div id="combo">
          <ul id="listConsults">
            <li className="listItems">GetAll</li>
            <li className="listItems" onClick={this.idClick}>ById(9400)</li>
          </ul>
        </div>
      </div> 
    )
  }
}

export default Localidad