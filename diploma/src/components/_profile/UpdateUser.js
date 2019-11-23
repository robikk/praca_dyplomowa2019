import React, { Component, Fragment } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';

export default class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newEmail: '',
            open: false,
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { newEmail } = this.state;
        console.log(newEmail)
        this.setState({
            newEmail: '',
            open: false,
        })
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open, newEmail } = this.state;
        return (
            <Fragment>
                <button className="w-100 btn btn-success" onClick={this.handleToggle}>
                    Change email
                </button>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                >
                    <DialogTitle id="form-dialog-title">
                        Change you'r email
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please fill out the form below.
                    </DialogContentText>
                        <form>
                            <TextField
                                name='newEmail'
                                label="new email"
                                margin="normal"
                                value={newEmail}
                                onChange={this.handleChange}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions className="d-flex justify-content-center">
                        <button className="btn btn-danger" onClick={this.handleSubmit}>
                            Change email
                        </button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
