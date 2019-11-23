import React, { Component, Fragment } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

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

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
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
                            <div>
                                <TextField
                                    name='newPass'
                                    label="new password"
                                    type='password'
                                    margin="normal"
                                    value={newPass}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    name='reNewPass'
                                    label="new password"
                                    type='password'
                                    margin="normal"
                                    value={reNewPass}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </form>
                    </DialogContent>
                    <DialogActions className="d-flex justify-content-center">
                        <button className="btn btn-danger" onClick={this.handleSubmit}>
                            Change password
                        </button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
