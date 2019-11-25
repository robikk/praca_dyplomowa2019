import React from 'react';
import { Link } from 'react-router-dom';
import { validationConstants } from '../_constants';
import TextField from '@material-ui/core/TextField';
import Navbar from '../_design/Navbar';
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repassword: '',
      submitted: false,
      showPassword: false,
      showRepassword: false,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleClickShowRepassword = () => {
    this.setState({ showRepassword: !this.state.showRepassword });
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true })
    const { email, password, repassword } = this.state;
    console.log(email + password + repassword)
  }

  render() {
    const { email, password, repassword, submitted } = this.state;
    return (
      <div>
        <Navbar />
        <div className="d-flex justify-content-center align-items-center bg-primary">
          <div className="row pb-5">
            <div className="col-xl-12 m-auto pt-5">
              <h2>Registration</h2>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center text-center">
          <div className="row">
            <div className="col-xl-12 mt-3">
              <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !(validationConstants.emailValidation.test(email)) ? ' has-error ' : '')}>
                  <Grid container spacing={1} alignItems="flex-end" className="justify-content-center">
                    <Grid item>
                      <EmailIcon />
                    </Grid>
                    <Grid item>
                      <TextField
                        name='email'
                        label="Email"
                        margin="normal"
                        value={email}
                        onChange={this.handleChange}
                        style={{ width: 300 }}
                      />
                    </Grid>
                  </Grid>
                  {
                    submitted && !email &&
                    <div className="text-danger h6">Field is required</div>
                  }
                  {
                    submitted && !(validationConstants.emailValidation.test(email)) && email &&
                    <div className="text-danger h6">Invalid address email</div>
                  }
                </div>
                <div className={'form-group' + (submitted && !(password.length > 5) ? ' has-error ' : '')}>
                  <Grid container spacing={1} alignItems="flex-end" className="justify-content-center">
                    <Grid item>
                      <LockIcon />
                    </Grid>
                    <Grid item>
                      <TextField
                        name='password'
                        label="Password"
                        type={this.state.showPassword ? 'text' : 'password'}
                        margin="normal"
                        value={password}
                        onChange={this.handleChange}
                        style={{ width: 300 }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={this.handleMouseDownPassword}
                              >
                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                  </Grid>
                  {
                    submitted && !password &&
                    <div className="text-danger h6">Field is required!</div>
                  }
                </div>
                <div className={'form-group' + (submitted && (!(password === repassword) || !(repassword)) ? ' has-error ' : '')}>
                  <Grid container spacing={1} alignItems="flex-end" className="justify-content-center">
                    <Grid item>
                      <LockIcon />
                    </Grid>
                    <Grid item>
                      <TextField
                        name='repassword'
                        label="Repassword"
                        type={this.state.showRepassword ? 'text' : 'password'}
                        margin="normal"
                        value={repassword}
                        onChange={this.handleChange}
                        style={{ width: 300 }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowRepassword}
                                onMouseDown={this.handleMouseDownPassword}
                              >
                                {this.state.showRepassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                      />
                    </Grid>
                  </Grid>
                  {
                    submitted && !repassword &&
                    <div className="text-danger h6">Field is required!</div>
                  }
                  {
                    submitted && !(password === repassword) && repassword &&
                    <div className="text-danger h6">Passwords doesn't match!</div>
                  }
                </div>
                <div className="form-group">
                  <button className="btn btn-primary mr-3 mt-3">Register</button>
                  <div className="mt-3">
                    <Link to="/login">Back to login...</Link>
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