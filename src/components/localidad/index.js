import React from 'react';


class Localidad extends React.Component {
  state = {
    person: []
  }

  async componentDidMount() { 
    const url = 'http://localhost:5000/localidad'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({person: data})
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
      </div>
      
    )
  }
}

export default Localidad