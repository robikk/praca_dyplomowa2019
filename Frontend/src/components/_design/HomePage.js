import React from 'react';
import Navbar from './Navbar';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: '',
    }
  }


  render() {
    return (
      <div>
         <Navbar />
         tu beda ligi
      </div>
    )
  }
}