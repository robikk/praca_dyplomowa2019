import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../_design/Navbar';
import './LeagueForm.css'
import { validationConstants } from '../_constants';
import { TextField } from '@material-ui/core';


export default class LeagueForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leagues: [{ name: '', members: '' }],
            groupName: '',
            submitted: false,
        }
    }


    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleLeagueChange = (e) => {
        if (['name', 'members'].includes(e.target.className)) {
            let leagues = [...this.state.leagues]
            leagues[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ leagues }, () => console.log(this.state.leagues))
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    addLeague = (e) => {
        if (!(this.state.leagues.length >= 8)) {
            this.setState((prevState) => ({
                leagues: [...prevState.leagues, { name: '', members: '' }]
            }))
        }
        else {
            alert("You cannot add more teams")
        }
    }

    finalSubmit = e => {
        e.preventDefault();
        this.setState({ submitted: true })
        if (this.state.leagues.length < 8) {
            alert('You have to add 8 teams to create a group!')
        } else {
            console.log('kurwiszon')
        }
    }

    render() {
        const { groupName, leagues, submitted } = this.state
        return (
            <div>
                <Navbar />
                <div className="d-flex justify-content-center align-items-center bg-primary">
                    <div className="row pb-5">
                        <div className="col-xl-12 m-auto pt-5">
                            <h1><button onClick={this.addLeague} className="btn btn-success">Add new League</button></h1>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="col-md-4 aling-items-center text-center">
                        <TextField
                            name='groupName'
                            label="Group name"
                            type='text'
                            margin="normal"
                            value={groupName}
                            onChange={this.handleChange}
                            style={{ width: 300 }}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="col-md-10">
                        <form className="form-inline justify-content-center align-items-center" onChange={this.handleLeagueChange}>
                            {
                                leagues.map((val, id) => {
                                    let leagueId = `name-${id}`, memberId = `members-${id}`
                                    return (
                                        <div key={id}>
                                            <div className="row">
                                                <div className="col-md-12 justify-content-center align-items-center text-center mr-5 pr-5 pl-5 pt-5">
                                                    <div className={'' + (submitted && !validationConstants.nameValidation.test(leagues[id].name) ? ' has-error ' : '')}>
                                                        <label htmlFor={leagueId}>
                                                            {`League#${id + 1}`}
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name={leagueId}
                                                            data-id={id}
                                                            id={leagueId}
                                                            defaultValue={leagues[id].name}
                                                            className="name"
                                                            placeholder="name..."
                                                        />
                                                        {
                                                            submitted && !leagues[id].name &&
                                                            <div className="text-danger h6">Field is required!</div>
                                                        }
                                                        {
                                                            submitted && !validationConstants.nameValidation.test(leagues[id].name) && leagues[id].name &&
                                                            <div className="text-danger h6">Error</div>
                                                        }
                                                        <label htmlFor={memberId}>
                                                            Members
                                                    </label>
                                                    </div>
                                                    <div className={'' + (submitted && !((leagues[id].members.length >= 10 && leagues[id].members.length <= 22)) ? ' has-error ' : '')}>
                                                        <input
                                                            type="text"
                                                            name={memberId}
                                                            data-id={id}
                                                            id={memberId}
                                                            defaultValue={leagues[id].members}
                                                            className="members"
                                                            placeholder="number of members..."
                                                        />
                                                        {
                                                            submitted && !leagues[id].members &&
                                                            <div className="text-danger h6">Field is required! <br /></div>
                                                        }
                                                        {
                                                            submitted && (leagues[id].members > 22 || leagues[id].members < 11) &&
                                                            <div className="text-danger h6">Possible values 11 - 22</div>
                                                        }
                                                        {
                                                            !(leagues[id].members > 22 || leagues[id].members < 11) && !validationConstants.createAdvertisementValidation.test(leagues[id].members) && leagues[id].members &&
                                                            <div className="text-danger h6">Value isn't number</div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }
                        </form>
                    </div>
                </div>
                <div className="d-flex col-md-12 justify-content-center align-items-center">
                    <button className="btn btn-primary mt-5" onClick={this.finalSubmit}>Accept leagues</button>
                </div>
            </div >
        )
    }
}