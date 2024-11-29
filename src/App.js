import './App.css';
import React, {Component} from "react";
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/HomeTitle'
import ParticlesBg from 'particles-bg'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register';
import HomeTitle from './components/Rank/HomeTitle';
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
    
    <div className="App">
   
    <Navigation onRouteChange = {this.onRouteChange} isSignedIn = {this.state.isSignedIn} />
      {
    //   this.state.route === 'home' ?
    //     <div >
    //       {/* <ParticlesBg type="cobweb" bg={true} num = {300} />  */}
    //       <Logo/>
    //       <HomeTitle name = {this.state.user.name}/>
    //       <button type="button" class="mt-16 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    //         <svg class="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
    //         <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
    //         <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    //         </svg>
    //         Click here to view all your courses!
    //         </button>
    //     </div> :
        <CourseList/>
    //     this.state.route === 'signin' ?
    //     <div>
    //         <ParticlesBg type="cobweb" bg={true} num = {50} />
    //         <Signin loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
    //     </div>:
    //    <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
      }
    </div> 
  );
}
}
export default App;


