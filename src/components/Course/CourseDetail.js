// import './App.css';
// import React, {Component} from "react";
// import Navigation from '../Navigation/Navigation'
// import Logo from '../Logo/Logo'
// import ImageLinkForm from '../ImageLinkForm/ImageLinkForm'
// import Rank from '../Rank/Rank'
// import ParticlesBg from 'particles-bg'
// import FaceRecognition from '../FaceRecognition/FaceRecognition'
// import Signin from '../Signin/Signin'
// import Register from '../Register/Register';



// // In this section, we set the user authentication, user and app ID, model details, and the URL
// // of the image we want as an input.
// const apiconfiguration =  (imageUrl) => {
//   const PAT = '914a9169c8744e4a84605d7accab8c11';
//   const USER_ID = 'tomwangwaterloo';
//   const APP_ID = 'SmartBrainTW';
//   const IMAGE_URL = imageUrl;

//   const raw = JSON.stringify({
//     "user_app_id": {
//         "user_id": USER_ID,
//         "app_id": APP_ID
//     },
//     "inputs": [
//         {
//             "data": {
//                 "image": {
//                     "url": IMAGE_URL
//                 }
//             }
//         }
//     ]
//   });

//   const requestOptions = {
    
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json',
//           'Authorization': 'Key ' + PAT
//       },
//       body: raw
//   };
//   return requestOptions;
// }


// const initialState = {
//   input : '',
//   imageUrl : '',
//   boxes: [],
//   route: 'signin',
//   isSignedIn : false,
//   user: {
//     id : '',
//     name: '',
//     email: '',
//     entries: 0,
//     joined: ''
//   }
// };
// class App extends Component {
//   constructor() {
//     super();
//     this.state = initialState;
//   }
//   loadUser = (data) => {
//     this.setState({ user: {
//       id : data.id,
//       name : data.name,
//       email : data.email,
//       entries : data.entries,
//       joined : data.joined
//     }
//     })
//   }
//   calculateFaceLocations = (regions) => {
//       const positionsArray = regions.map((region) => {
//       const clarifaiFace = region.region_info.bounding_box;
//       const image = document.getElementById('inputImage');
//       const width = Number(image.width);
//       const height = Number(image.height);
//       return {
//         leftCol : clarifaiFace.left_col * width,
//         topRow : clarifaiFace.top_row * height,
//         bottomRow : Number(height - clarifaiFace.bottom_row * height),
//         rightCol : Number(width - clarifaiFace.right_col * width),      
//       }
//     })
//     return positionsArray;
//   }
//   displayFaceBox = (boxes) => {
//     this.setState({boxes : boxes});
//   }
//   onInputChange = (event) => {
//     this.setState({input : event.target.value});
//   }

//   onRouteChange = (route) => {
//     if (route === 'home') {
//       this.setState({isSignedIn : true})
//     } else if (route === 'signin') {
//       this.setState(initialState)
//     }
//     this.setState ({route: route})
    
//   }
//   onClickChange = ()  => {
//     this.setState({imageUrl: this.state.input});
//     // fetch("https://cors-anywhere.herokuapp.com/https://api.clarifai.com/v2/models/face-detection/outputs", 
//     // apiconfiguration(this.state.input))
//     fetch('http://localhost:3001/handleClarifaiApi', {
//       method : 'post',
//       headers: {'Content-Type' : 'application/json'},
//       body : JSON.stringify({
//           input : this.state.input
//       })
//     })
//     // .then(response => {
//     //   console.log(response.json)
//     //   return response.json()
//     // })
//     // .then(response => response.json())
//     .then(async result => {
//       console.log(3, result)
//       result = await result.json()
//       console.log(4, result)
//       const regions = result.outputs[0].data.regions;
//       return regions;
//     })
//     .then(data => {
//       console.log(5, data)
//       fetch('http://localhost:3001/image', {
//         method : 'put',
//         headers: {'Content-Type' : 'application/json'},
//         body : JSON.stringify({
//             id : this.state.user.id
//         })
//       })
//       .then(response => response.json())
//       .then(entries => {
//         this.setState(Object.assign(this.state.user, {entries: entries}));
//       })
//       .catch(error => console.log('error', error));
//       this.displayFaceBox(this.calculateFaceLocations(data))
//     })
//     .catch(error => console.log('error', error));

//     // console.log(this.state.box);
//   }
//   render() {return (
    
//     <div className="App">
   
//     <Navigation onRouteChange = {this.onRouteChange} isSignedIn = {this.state.isSignedIn} />
//       {
//       this.state.route === 'home' ?
//         <div>
//           <ParticlesBg type="cobweb" bg={true} num = {300} /> 
//           <Logo/>
//           <Rank name = {this.state.user.name} entries = {this.state.user.entries}/>
//           <ImageLinkForm onInputChange = {this.onInputChange} onClickChange= {this.onClickChange}/>
//           <FaceRecognition imageSource = {this.state.imageUrl} boxes = {this.state.boxes}/> 
//         </div> :
//         this.state.route === 'signin' ?
//        <Signin loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/> :
//        <Register loadUser = {this.loadUser} onRouteChange = {this.onRouteChange}/>
//       }
//     </div> 
//   );
// }
// }
// export default App;


