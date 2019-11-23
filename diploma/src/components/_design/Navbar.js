import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa'
import Repass from '../_profile/Repass';
import UpdateUser from '../_profile/UpdateUser';
import DeleteAcc from '../_profile/DeleteAcc';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to='/'>LeagueApp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDropdown" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/LeagueForm'>Add league <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cos2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cos3</a>
            </li>
          </ul>
          <div className=" collapse navbar-collapse" id="navbarDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mr-3" href=" # " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FaUserAlt size={32} />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <UpdateUser />
                  <Repass />
                  <DeleteAcc />
                  <Link
                    className="dropdown-item"
                    to="/login"
                  >
                    Logout
                </Link>
                </div>
              </li>
            </ul>
            <Link to="/login"><button className="btn btn-primary">Login</button></Link>
          </div>
        </div>
      </nav>
    );
  }
}
