import './CourseDetail.css';
import React, {Component} from "react";
import Logo from '../Logo/Logo'
import DropUpload from '../ImageLinkForm/DropUpload'
import CourseTitle from '../Texts/CourseTitle'
import ParticlesBg from 'particles-bg'
import FaceRecognition from '../FaceRecognition/FaceRecognition'
import AnimatedText from '../Texts/AnimatedText'
import CircularProgress from '../Stats/CircularProgress'


const initialState = {
  input : '',
  imageUrl : '',
  boxes: [],
  isSignedIn : false,
  user: {
    id : '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};
class CourseDetail extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  calculateFaceLocations = (regions) => {
      const positionsArray = regions.map((region) => {
      const clarifaiFace = region.region_info.bounding_box;
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol : clarifaiFace.left_col * width,
        topRow : clarifaiFace.top_row * height,
        bottomRow : Number(height - clarifaiFace.bottom_row * height),
        rightCol : Number(width - clarifaiFace.right_col * width),      
      }
    })
    return positionsArray;
  }
  displayFaceBox = (boxes) => {
    this.setState({boxes : boxes});
  }
  onInputChange = async (value) => {
    await this.setState({input : value});
  }

  onImageChange = async (value) => {
    await this.setState({imageUrl : value});
  }



  onClickChange = ()  => {
    console.log(6, this.state.imageUrl);
    // this.setState({imageUrl: this.state.input});
    fetch('http://localhost:3001/handleClarifaiApi', {
      method : 'post',
      headers: {'Content-Type' : 'application/json'},
      body : JSON.stringify({
          input : this.state.input
          // input : this.s
      })
    })
    // .then(response => {
    //   console.log(response.json)
    //   return response.json()
    // })
    // .then(response => response.json())
    .then(async result => {
      result = await result.json()
      const regions = result.outputs[0].data.regions;
      return regions;
    })
    .then(data => {
      fetch('http://localhost:3001/image', {
        method : 'put',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            id : this.props.id
        })
      })
      .then(response => response.json())
      .then(entries => {
        this.setState(Object.assign(this.state.user, {entries: entries}));
      })
      .catch(error => console.log('error', error));
      this.displayFaceBox(this.calculateFaceLocations(data))
    })
    .catch(error => console.log('error', error));

    // console.log(this.state.box);
  }
  render() {return (
    
    <div className="">
      <div className=""> 
      <CourseTitle CourseName='MTE201' Term= '2025 Winter'/>
      </div>
      <DropUpload imageSource = {this.state.imageUrl} boxes = {this.state.boxes} onInputChange = {this.onInputChange} onClickChange= {this.onClickChange} onImageChange = {this.onImageChange}/>
      {
      this.state.imageUrl !== '' &&
      <div className='flex justify-center mr-32'>
        {/* <FaceRecognition imageSource = {this.state.imageUrl} boxes = {this.state.boxes}/>  */}
        {/* <AnimatedText/>
        <CircularProgress percentage={75}/> */}
       </div> }
       <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="items-center h-48 rounded bg-gray-50 dark:bg-gray-800">
            <AnimatedText/>
            <CircularProgress percentage={75}/>
          </div>
      </div>
    </div> 
  );
}
}
export default CourseDetail;


