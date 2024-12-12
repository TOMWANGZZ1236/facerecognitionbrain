import React, { useState } from "react";
import { FileInput, Label } from "flowbite-react";
import ImageOverlay from '../Utilities/ImageOverlayButton';
import ImageSubmission from '../Utilities/submissionButton';

function cleanUrl(url) {
  // Check if the URL starts with 'blob:' and remove it
  if (url.startsWith('data:image/png;base64,')) {
    return url.slice(22); // Remove the first 5 characters ('blob:')
  }
  return url; // Return the original URL if it doesn't start with 'blob:'
}


function DropUpload({email, selectedCourse, onInputChange, onClickChange, onImageChange, imageSource, boxes}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      // This event handler will run after the reader has read the file
      reader.onload = async (loadEvent) => {
        const base64String = loadEvent.target.result;
        // console.log("Base64 String:", base64String); 
        await onInputChange(cleanUrl(base64String));
        await onImageChange((base64String));
      };
      reader.readAsDataURL(file);
    }
  };


  const onClick =  () => {
      
      onClickChange();
  }

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className= "flex flex-row justify-center items-center">
        <ImageOverlay imageSource = {imageSource} boxes = {boxes} onClick = {onClick}/>
        {/* <button onClick = {() => {onClick()}} ontype="button" className="ml-4 my-8 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21,5H11.72l-.32-1A3,3,0,0,0,8.56,2H3A3,3,0,0,0,0,5V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V8A3,3,0,0,0,21,5Zm1,14a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H8.56a1,1,0,0,1,.95.68L10.28,7H21a1,1,0,0,1,1,1Z"></path><path d="M12.71,9.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L11,12.41V18a1,1,0,0,0,2,0V12.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
          </svg>
          Submit
        </button> */}
        <ImageSubmission email = {email} selectedCourse={selectedCourse}/>
      </div>
        <Label
          htmlFor="dropzone-file"
          className="flex h-44 w-6/12 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <svg
              className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <FileInput 
            id="dropzone-file" 
            className="hidden" 
            onChange={handleFileChange} // Set up the onChange handler
          />
        </Label>

    </div>
  );
}

export default DropUpload;
