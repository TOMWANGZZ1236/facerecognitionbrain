import './App.css';
import React, {Component} from "react";
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'



// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input.

const apiconfiguration =  (imageUrl) => {
  const PAT = '';
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
    }
  }
  calculateFaceLocations = (data) => {
    const clarifaiFace = data[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    // console.log(clarifaiFace.bottom_row);
    // console.log(clarifaiFace.top_row);
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
  onClickChange = ()  => {
    this.setState({imageUrl: this.state.input});
    fetch("https://cors-anywhere.herokuapp.com/https://api.clarifai.com/v2/models/face-detection/outputs", 
    apiconfiguration(this.state.input))
    .then(response => response.json())
    .then(result => {
      console.log(result);
      const regions = result.outputs[0].data.regions;
      return regions;
      // regions.forEach(region => {
      //     // Accessing and rounding the bounding box values
      //     const boundingBox = region.region_info.bounding_box;
      //     const topRow = boundingBox.top_row.toFixed(3);
      //     const leftCol = boundingBox.left_col.toFixed(3);
      //     const bottomRow = boundingBox.bottom_row.toFixed(3);
      //     const rightCol = boundingBox.right_col.toFixed(3);

      //     // region.data.concepts.forEach(concept => {
      //     //     // Accessing and rounding the concept value
      //     //     const name = concept.name;
      //     //     const value = concept.value.toFixed(4);

      //     //     console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);   
              
      //     // });
      //     this.displayFaceBox({topRow : topRow, leftCol: leftCol, bottomRow: bottomRow, rightCol: rightCol});
          
      // });
    })
    .then(data => this.displayFaceBox(this.calculateFaceLocations(data)))
    .catch(error => console.log('error', error));

    console.log(this.state.box);
  }
  render() {return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} num = {300} /> 
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange = {this.onInputChange} onClickChange= {this.onClickChange}/>
      <FaceRecognition imageSource = {this.state.imageUrl} box = {this.state.box}/>
    </div>
  );
}
}
export default App;


