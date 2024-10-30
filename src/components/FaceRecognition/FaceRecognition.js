import React from "react";


const FaceRecognition = ({imageSource}) => {
    return(
        <div className = 'center ma'>
            <div className = 'absolute mt2'>
                <img alt = '' src = {imageSource}  width = '500px' height = 'auto'/>
            </div>
        </div>
    );
}

export default FaceRecognition

