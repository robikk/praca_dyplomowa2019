import React, { Component, Fragment } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment';

export default class Repass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPass: '',
            reNewPass: '',
            open: false,
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { newPass, reNewPass } = this.state;
        if (newPass !== reNewPass) {
            alert('passwords doesnt match')
        }
        else {
            this.setState({
                newPass: '',
                reNewPass: '',
                open: false,
            })
        }
        console.log(newPass, reNewPass)
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

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.setState({
            open: false,
        })
        console.log("Canceled")
    }

    render() {
        const { open, newPass, reNewPass } = this.state;
        return (
            <Fragment>
                <button className="w-100 btn btn-success" onClick={this.handleToggle}>
                    Change Password
                </button>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                >
                    <DialogTitle>
                        Change you'r password
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below.
                    </DialogContentText>
                        <form>
                            <Grid container spacing={1} alignItems="flex-end" className="justify-content-center">
                                <Grid item>
                                    <LockIcon />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name='newPass'
                                        label="new password"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        margin="normal"
                                        value={newPass}
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
                            <Grid container spacing={1} alignItems="flex-end" className="justify-content-center">
                                <Grid item>
                                    <LockIcon />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        name='reNewPass'
                                        label="new password"
                                        type={this.state.showRepassword ? 'text' : 'password'}
                                        margin="normal"
                                        value={reNewPass}
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
                        </form>
                    </DialogContent>
                    <DialogActions className="d-flex justify-content-around">
                        <button className="btn btn-primary" onClick={this.handleCancel}>
                            Cancel
                        </button>
                        <button className="btn btn-danger" onClick={this.handleSubmit}>
                            Change password
                        </button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
