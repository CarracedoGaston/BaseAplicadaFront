import React from 'react';
import './style.css'

class Table extends React.Component {
  state = {
    person: [],
    url: 'http://localhost:5000/'
  }

  async componentDidMount() { 
    const url = `${this.state.url}${this.props.url}`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({person: data})
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
              {`${person.lastName}`}
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

  render () {
    return ( 
      <div id="table">
        {this.nameColumn()}
        {this.props.url==='localidad'?this.cpColumn():this.lastNameColumn()}
      </div>
    )
  }
}

export default Table