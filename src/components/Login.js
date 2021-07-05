import { Component } from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import LogoIron from '../images/logoIronhack.png'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <img
          src="../images/logoIronhack.png"
          alt="IronHack"
          width="30"
          height="24"
        />
        <h1>Login</h1>
        {/* <label htmlFor="signupFormEmail">E-mail Address</label> */}
        <input
          type="email"
          name="email"
          id="signupFormEmail"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <div>
          {/* <label htmlFor="signupFormPassword">Password</label> */}
          <input
            type="password"
            name="password"
            id="signupFormPassword"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button type="submit">Login!</button>
          <Link to="/SignUp">Don't have an account? Click here to signup!</Link>
        </div>
      </div>
    )
  }
}
export default Login
