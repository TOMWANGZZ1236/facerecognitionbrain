import './App.css';
import React, {Component} from "react";
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register';



// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input.

const apiconfiguration =  (imageUrl) => {
 
  const USER_ID = 'tomwangwaterloo';
  const APP_ID = 'SmartBrainTW';
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
  });

  const requestOptions = {
    
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };
  return requestOptions;
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input : '',
      imageUrl : '',
      box : {},
      route: 'signin',
      isSignedIn : false,
    }
  }
  calculateFaceLocations = (data) => {
    const clarifaiFace = data[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      bottomRow : Number(height - clarifaiFace.bottom_row * height),
      rightCol : Number(width - clarifaiFace.right_col * width),      
    }
    
  }
  displayFaceBox = (box) => {
    this.setState({box : box});
  }
  onInputChange = (event) => {
    this.setState({input : event.target.value});
  }
  onRouteChange = (route) => {
    if (route === 'home') {
      this.setState({isSignedIn : true})
    } else if (route === 'signin') {
      this.setState({isSignedIn : false})
    }
    this.setState ({route: route})
    
  }
  onClickChange = ()  => {
    this.setState({imageUrl: this.state.input});
    fetch("https://cors-anywhere.herokuapp.com/https://api.clarifai.com/v2/models/face-detection/outputs", 
    apiconfiguration(this.state.input))
    .then(response => response.json())
    .then(result => {
      console.log(result);
      const regions = result.outputs[0].data.regions;
      return regions;
    })
    .then(data => this.displayFaceBox(this.calculateFaceLocations(data)))
    .catch(error => console.log('error', error));

    console.log(this.state.box);
  }
  render() {return (
    
    <div className="App">
   
    <Navigation onRouteChange = {this.onRouteChange} isSignedIn = {this.state.isSignedIn} />
      {
      this.state.route === 'home' ?
        <div>
          <ParticlesBg type="cobweb" bg={true} num = {300} /> 
          <Logo/>
          <Rank/>
          <ImageLinkForm onInputChange = {this.onInputChange} onClickChange= {this.onClickChange}/>
          <FaceRecognition imageSource = {this.state.imageUrl} box = {this.state.box}/> 
        </div> :
        this.state.route === 'signin' ?
       <Signin onRouteChange = {this.onRouteChange}/> :
       <Register/>
      }
    </div> 
  );
}
}
export default App;


