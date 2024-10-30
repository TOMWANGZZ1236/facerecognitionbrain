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
  const PAT = '914a9169c8744e4a84605d7accab8c11';
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
    }
  }
  onInputChange = (event) => {
    this.setState({input : event.target.value});
    console.log('Success');
  }
  onClickChange = () => {
    this.setState({imageUrl: this.state.input});
    fetch("https://cors-anywhere.herokuapp.com/https://api.clarifai.com/v2/models/face-detection/outputs", 
    apiconfiguration(this.state.input))
    .then(response => response.json())
    .then(result => {
      const regions = result.outputs[0].data.regions;
      regions.forEach(region => {
          // Accessing and rounding the bounding box values
          const boundingBox = region.region_info.bounding_box;
          const topRow = boundingBox.top_row.toFixed(3);
          const leftCol = boundingBox.left_col.toFixed(3);
          const bottomRow = boundingBox.bottom_row.toFixed(3);
          const rightCol = boundingBox.right_col.toFixed(3);

          region.data.concepts.forEach(concept => {
              // Accessing and rounding the concept value
              const name = concept.name;
              const value = concept.value.toFixed(4);

              console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);   
          });
      });
    })
    .catch(error => console.log('error', error));
  }
  render() {return (
    <div className="App">
      <ParticlesBg type="cobweb" bg={true} num = {300} /> 
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm onInputChange = {this.onInputChange} onClickChange= {this.onClickChange}/>
      <FaceRecognition imageSource = {this.state.imageUrl}/>
    </div>
  );
}
}
export default App;


