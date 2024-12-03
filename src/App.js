import './App.css';
import React, {Component} from "react";
import Navigation from './components/Navigation/NavigationBar'
import Dashboard from './components/Navigation/MainPage'
import Logo from './components/Logo/Logo'
import ParticlesBg from 'particles-bg'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register';
import HomeTitle from './components/Texts/HomeTitle';
import OverViewCard from './components/Course/OverViewCard';
import CourseList from './components/Course/CourseList';




// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input.

const initialState = {
  input : '',
  imageUrl : '',
  boxes: [],
  route: 'signin',
  isSignedIn : false,
  user: {
    id : '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  loadUser = (data) => {
    this.setState({ user: {
      id : data.id,
      name : data.name,
      email : data.email,
      entries : data.entries,
      joined : data.joined
    }
    })
  }


  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn : true})
    } else if (route === 'signin') {
      this.setState(initialState)
    }
    this.setState ({route: route})
    
  }

  render() {return (
    
    <div>
      {
      this.state.route === 'home' ?
        <div className='App'>
                <Dashboard id = {this.state.user.id}/>
        </div> :
        this.state.route === 'signin' ?
        <div>
            <ParticlesBg type="cobweb" bg={true} num = {50} />
            <Signin loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
        </div>:
        <div>
            <ParticlesBg type="cobweb" bg={true} num = {50} />
            <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
        </div>
      }
    </div> 
  );
}
}
export default App;


