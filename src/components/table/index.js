import React from 'react';


class Table extends React.Component {
  state = {
    person: []
  }

  async componentDidMount() { 
    const url = `${this.props.url}`
    const response = await fetch(url)
    const data = await response.json()
    this.setState({person: data})
  }

  async componentDidUpdate(prevProps) { 
    if (this.props.url !== prevProps.url){
      const url = `${this.props.url}`
      const response = await fetch(url)
      const data = await response.json()
      this.setState({person: data})
    }
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

export default Table