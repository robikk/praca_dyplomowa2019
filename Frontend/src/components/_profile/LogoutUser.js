import React, { Component, Fragment } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import { userActions } from '../_actions';

export default class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            open: false,
        })
        userActions.logout();
        console.log('Logouted')
    }

    handleCancel = (e) => {
        e.preventDefault();
        this.setState({
            open: false,
        })
        console.log("Canceled")
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open } = this.state;
        return (
            <Fragment>
                <button className="w-100 btn btn-success" onClick={this.handleToggle}>
                    Logout
                </button>
                <Dialog
                    open={open}
                    onClose={this.handleToggle}
                >
                    <DialogTitle>
                        Do you want to logout?
                    </DialogTitle>
                    <DialogActions className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={this.handleCancel}>
                            Cancel
                        </button>
                        <button className="btn btn-danger" onClick={this.handleSubmit}>
                            Logout
                        </button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
