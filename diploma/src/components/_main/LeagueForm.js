import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../_design/Navbar';

export default class LeagueForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
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
                    <div className="row">
                        <div className="col-xl-12 mt-3">
                            <form name="form" onSubmit={this.handleSubmit}>
                                    hehe
                                <div className="form-group">
                                    <button className="btn btn-primary mr-3 mt-3">Add League!</button>
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