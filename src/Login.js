import React from 'react'
import './Login.css'
import App from './App'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      validation: true
    }
    this.login = this.login.bind(this)
  }

  login() {
    const name = document.getElementById('nameLogin').value
    const password = document.getElementById('passwordLogin').value
    if(name==='mauri' && password === '1234'){
      this.setState({validation: true})
    }  
  }
  
  render() {
    return (
      <>
        {this.state.validation===false?
        <div id="loginContainer">
          <div id="form">
            <input id="nameLogin" placeholder="Your name.."></input>
            <input id="passwordLogin" placeholder="Your password.."></input>
            <button className="buttonLogin" onClick={this.login}>Login</button>
          </div>     
        </div>:
        <App />}
      </>
    )
  }
}

export default Login