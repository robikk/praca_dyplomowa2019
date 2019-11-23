import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Navbar from '../_design/Navbar';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true })
    const { email, password } = this.state;
    console.log(email + password)
  }

  render() {
    const { email, password, submitted } = this.state;
    return (
      <div>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center bg-primary">
          <div className="row pb-5">
            <div className="col-xl-12 m-auto pt-5">
              <h2>Login</h2>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center text-center">
          <div className="row">
            <div className="col-xl-12 mt-4">
              <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !email ? ' has-error ' : '')}>
                  <TextField
                    name='email'
                    label="Email"
                    margin="normal"
                    value={email}
                    onChange={this.handleChange}
                  />
                  {
                    submitted && !email &&
                    <div className="text-danger h6">Field is required!</div>
                  }
                </div>
                <div className={'form-group' + (submitted && password ? ' has-error ' : '')}>
                  <TextField
                    name='password'
                    label="Password"
                    type='password'
                    margin="normal"
                    value={password}
                    onChange={this.handleChange}
                  />
                  {
                    submitted && !password &&
                    <div className="text-danger h6">Field is required!</div>
                  }
                </div>
                <div className="form-group">
                  <button className="btn btn-primary mr-3">Login</button>
                  <div className="mt-3 mb-5">
                    <Link to="/registration">Dont have account? Create account</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

