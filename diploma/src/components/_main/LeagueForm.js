import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../_design/Navbar';
import TextField from '@material-ui/core/TextField';
import { validationConstants } from '../_constants';
import './LeagueForm.css'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import GroupIcon from '@material-ui/icons/Group';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


export default class LeagueForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagueName: '',
            members: '',
            images: null,
            imgPreview: '',
            submitted: false,
        }
    }

    fileSelectedHandler = e => {
        this.setState({
            images: e.target.files[0]
        })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    /* fileUploadHandler = (e) => {
         e.preventDefault();
         const fd = new FormData();
         fd.append('Images', this.state.images, this.state.images.name, this.state.images.type);
         axios.put(`https://jsonplaceholder.typicode.com/photos/1`, fd, {
             onUploadProgress: progressEvent => {
                 console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
             }
         })
             .then(res => {
                 console.log(res)
             })
             console.log(this.state.images)
     }
  dzienki działa */

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ submitted: true })
        const fd = new FormData();
        fd.append('images', this.state.images)
        const league = {
            leagueName: this.state.leagueName,
            members: this.state.members,
            images: fd
        }

        axios.post(`https://jsonplaceholder.typicode.com/photos`, { league }, {
            onUploadProgress: progressEvent => {
                console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
            }
        })
            .then(res => {
                console.log(res)
            })
    }


    render() {
        const { leagueName, members, submitted } = this.state
        return (
            <div>
                <Navbar />
                <div className="d-flex justify-content-center align-items-center bg-primary">
                    <div className="row pb-5">
                        <div className="col-xl-12 m-auto pt-5">
                            <h2>Add League</h2>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-center align-items-center text-center">
                    <div className="col-xl-12 mt-3">
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !(validationConstants.nameValidation.test(leagueName)) ? ' has-error ' : '')}>
                                <Grid container spacing={1} alignItems="flex-end" className="justify-content-center">
                                    <Grid item>
                                        <GroupIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            name='leagueName'
                                            label="league name"
                                            margin="normal"
                                            value={leagueName}
                                            onChange={this.handleChange}
                                            style={{ width: 300 }}
                                        />
                                    </Grid>
                                </Grid>
                                {
                                    submitted && !leagueName &&
                                    <div className="text-danger h6">Field is required!</div>
                                }
                                {
                                    submitted && !validationConstants.nameValidation.test(leagueName) && leagueName &&
                                    <div className="text-danger">No special characters and numbers!</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !((members.length >= 11 && members.length <= 22)) ? ' has-error ' : '')}>
                                <Grid container spacing={1} alignItems="flex-end" className="justify-content-center">
                                    <Grid item>
                                        <PersonAddIcon />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            name='members'
                                            label='league members'
                                            margin='normal'
                                            value={members}
                                            onChange={this.handleChange}
                                            style={{ width: 300 }}
                                        />
                                    </Grid>
                                </Grid>
                                {
                                    submitted && !members &&
                                    <div className="text-danger h6">Field is required!</div>
                                }
                            </div>
                            <div>
                                <div className='form-group'>
                                    <input className="fileInput"
                                        type="file"
                                        onChange={this.fileSelectedHandler}
                                    />
                                </div>
                                <button onClick={this.fileUploadHandler}>
                                    Upload
                                </button>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary mr-3 mt-3">Add League!</button>
                                <div className="mt-3">
                                    <Link to="/login">Back to login...</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div >
        )
    }
}