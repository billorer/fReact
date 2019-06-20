import React, { Fragment, Component } from 'react';
import UserItem from './components/users/UserItem';
import Navbar from './components/layout/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
