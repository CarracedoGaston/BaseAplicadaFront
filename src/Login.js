import React from 'react'
import './Login.css'
import App from './App'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      validation: false
    }
    this.login = this.login.bind(this)
  }

  login() {
    this.setState({validation: true})
  }
  render() {
    return (
      <>
        {this.state.validation===false?
        <div id="loginContainer">
          <div id="form">
            <input placeholder="Your name.."></input>
            <input placeholder="Your password.."></input>
            <button className="buttonLogin" onClick={this.login}>Login</button>
          </div>     
        </div>:
        <App />}
      </>
    )
  }
}

export default Login