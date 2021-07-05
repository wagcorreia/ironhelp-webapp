import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    isBlurred: {
      email: false,
      password: false,
    },
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleBlur = (event) => {
    this.setState({
      isBlurred: { ...this.state.isBlurred, [event.target.name]: true },
    })
  }
  renderClassname = (error, blur) => {
    if (error && blur) {
      return 'is-invalid'
    } else if (!blur) {
      return ''
    } else {
      return 'is-valid'
    }
  }
  renderFeedback = (error, blur, validMessage) => {
    if (error && blur) {
      return <div className="invalid-feedback">{error}</div>
    } else if (!blur) {
      return null
    } else {
      return <div className="valid-feedback">{validMessage}</div>
    }
  }
  validate = (formValues) => {
    let errors = {}
    if (
      !formValues.email ||
      !formValues.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g)
    ) {
      errors = { ...errors, email: 'Invalid E-mail' }
    }
    if (
      !formValues.password ||
      !formValues.password.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
      )
    ) {
      errors = { ...errors, password: 'Your password is too weak' }
    }
    return errors
  }

  render() {
    const errors = this.validate(this.state)
    return (
      <div className="col-lg-6 m-4">
        <h1>SignUp</h1>
        <form>
          {/* Email input */}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className={`form-control ${this.renderClassname(
                errors.email,
                this.state.isBlurred.email,
              )}`}
              id="exampleInputEmail1"
              name="email"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={this.state.email}
            />
            {this.renderFeedback(
              errors.email,
              this.state.isBlurred.email,
              'You typed a valid e-mail',
            )}
          </div>
          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={`form-control ${this.renderClassname(
                errors.password,
                this.state.isBlurred.password,
              )}`}
              id="exampleInputPassword1"
              name="password"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={this.state.password}
            />
            {this.renderFeedback(
              errors.password,
              this.state.isBlurred.password,
              'You typed a valid password',
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p>Your e-mail address is: {this.state.email}</p>
      </div>
    )
  }
}
export default SignUp
