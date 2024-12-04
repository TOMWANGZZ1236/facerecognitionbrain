import React, { useState } from 'react';
import Modal from 'react-modal';
import './ImageOverlay.css';  // Make sure this path is correct and CSS is loaded

// Tailwind does not remove these styles in production
Modal.setAppElement('#root');

function ImageOverlay({ imageSource, boxes, onClick }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='inline-block'>
      <button onClick={() => setModalIsOpen(true)} type="button" className="ml-4 my-8 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        </svg>
        Preview
      </button> 

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Image Modal"
        className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-4 w-2/5 rounded-lg max-w-4xl static">
            <div className='w-96 h-64'>
                <div className='relative' style={{ display: 'inline-block' }}>
                <img className='w-auto h-64' id='inputImage' alt='' src={imageSource} />
             
                    {boxes && boxes.map((box, index) => (
                        <div key={index} className='absolute bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
                    ))}
                </div>   
            </div>
            <button
                className="ml-4 my-8 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => setModalIsOpen(false)}
            >
                Close
            </button>
            <button onClick={onClick} type="button" className="ml-4 my-8 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Detect
            </button>
        </div>
      </Modal>
    </div>
  );
}

export default ImageOverlay;
