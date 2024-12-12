import './App.css';
import React, {Component, useState} from "react";
import Navigation from './components/Navigation/NavigationBar'
import Dashboard from './components/Navigation/MainPage'
import Logo from './components/Logo/Logo'
import ParticlesBg from 'particles-bg'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register';
import {useSelector} from 'react-redux';


const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
    courses: []
  }
};

function App() {
  const courses = useSelector(state => state.courses)
  
  const [state, setState] = useState(initialState);

  const loadUser = (data, courses) => {
    setState(prevState => ({
      ...prevState,
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
        courses: courses
      }
    }));
  };

  const onRouteChange = (route) => {
    if (route === 'home') {
      setState(prevState => ({ ...prevState, isSignedIn: true }));
    } else if (route === 'signin') {
      setState(initialState);
    }
    setState(prevState => ({ ...prevState, route: route }));
  };

  return (
    <div>
      {state.route === 'home' ?
        <div className='App'>
          <Dashboard email={state.user.email} onRouteChangeParent={onRouteChange} />
        </div> :
        state.route === 'signin' ?
        <div>
          <ParticlesBg type="cobweb" bg={true} num={50} />
          <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
        </div> :
        <div>
          <ParticlesBg type="cobweb" bg={true} num={50} />
          <Register loadUser={loadUser} onRouteChange={onRouteChange} />
        </div>
      }
    </div>
  );
}

export default App;
