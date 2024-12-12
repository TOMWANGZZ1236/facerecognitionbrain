import './CourseDetail.css';
import React, { useState, useEffect } from "react";
import Logo from '../Logo/Logo';
import DropUpload from '../ImageLinkForm/DropUpload';
import CourseTitle from '../Texts/CourseTitle';
import AnimatedText from '../Texts/AnimatedText';
import CircularProgress from '../Stats/CircularProgress';

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
};

const CourseDetail = ({email, selectedCourse}) => {
  const [state, setState] = useState(initialState);
  const [detectedNumber, setNumber] = useState(-1)


  const calculateFaceLocations = (regions) => {
    return regions.map((region) => {
      const clarifaiFace = region.region_info.bounding_box;
      const image = document.getElementById('inputImage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        bottomRow: height - clarifaiFace.bottom_row * height,
        rightCol: width - clarifaiFace.right_col * width,
      }
    });
  };

  const displayFaceBox = (boxes) => {
    setState(prevState => ({ ...prevState, boxes }));
  };

  const onInputChange = async (value) => {
    await setState(prevState => ({ ...prevState, input: value }));
  };

  const onImageChange = async (value) => {
    await setState(prevState => ({ ...prevState, imageUrl: value }));
  };

  const onSubmissionChange = () => {

  }
  const onClickChange = () => {
    fetch('http://localhost:3001/handleClarifaiApi', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: state.input
      })
    })
    .then(async response => {
      const result = await response.json();
      const regions = result.outputs[0].data.regions;
      setNumber(regions.length)
      return regions;
    })
    .then(data => {
      // fetch('http://localhost:3001/imageSubmission', {
      //   method: 'put',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify({
      //     email: email,
      //     name: selectedCourse.name,
      //   })
      // })
      // .then(response => response.json())
      // .then(entries => {
      //   setState(prevState => ({ ...prevState, user: { ...prevState.user, entries: entries } }));
      // })
      // .catch(error => console.log('error', error));
      displayFaceBox(calculateFaceLocations(data))
    })
    .catch(error => console.log('error', error));
  };

  return (
    <div className="justify-center">
      <div className="">
        <CourseTitle CourseName= {selectedCourse.name} Term= {selectedCourse.time}/>
      </div>
      <DropUpload percentage={(detectedNumber/selectedCourse.students) *100} attended={detectedNumber} email = {email} selectedCourse = {selectedCourse} imageSource={state.imageUrl} 
      boxes={state.boxes} onInputChange={onInputChange} onClickChange={onClickChange} onImageChange={onImageChange}/>
      {state.imageUrl !== '' &&
        <div className='flex justify-center mr-32'>
          {/* <FaceRecognition imageSource={state.imageUrl} boxes={state.boxes}/> */}
          {/* <AnimatedText/>
          <CircularProgress percentage={75}/> */}
        </div>
      }
      <div className="grid grid-cols-1 gap-4 mt-10">
        {
        detectedNumber !== -1 &&
        <div className="items-center h-48 rounded">
          <AnimatedText attended={detectedNumber} actual = {selectedCourse.students}/>
          <CircularProgress percentage={(detectedNumber/selectedCourse.students) *100}/>
        </div>
        }
      </div>
    </div>
  );
}

export default CourseDetail;
