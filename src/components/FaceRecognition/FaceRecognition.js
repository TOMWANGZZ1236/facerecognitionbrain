import React from "react";
import './FaceRecognition.css';


const FaceRecognition = ({imageSource, boxes}) => {
    return(
        <div className = 'flex justify-center'>
            <div className = 'absolute mt-6 mr-32'>
                <img className = 'w-auto h-64' id = 'inputImage' alt = '' src = {imageSource} />
                {
                boxes.map((box, index) => {
                    return <div key = {index} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                })
                }
            </div>
        </div>
    );
}

export default FaceRecognition

