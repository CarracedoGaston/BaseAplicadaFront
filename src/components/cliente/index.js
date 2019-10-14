import React from 'react';


class Cliente extends React.Component {
  state = {
    person: []
  }

  async componentDidMount() { 
    const url = 'http://localhost:5000/cliente'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({person: data})
  }

  render () {
    return ( 
      <div id="table">
        <div id="name">
          <div className="title">Name</div>
          {this.state.person.map(person => (
            <div key = {person._id} className="nameRow">
            {`${person.name}`}
            </div>
          ))}
        </div>
        <div id="lastName">
          <div className="title">Last Name</div>
          {this.state.person.map(person => (
            <div key = {person._id} className="lastNameRow">
            {`${person.lastName}`}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Cliente