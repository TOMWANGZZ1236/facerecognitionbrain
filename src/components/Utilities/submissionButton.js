import React, { useState } from 'react';
import './SubmissionButton.css';

// Overlay component
function Overlay({ children, show }) {
  return (
    <div className={`overflow-y-auto fixed ml-56 inset-0 bg-white bg-opacity-50 flex items-center justify-center ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
    {/* <div className = "overflow-y-auto fixed ml-56 inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"> */}
      {children}
    </div>
  );
}

// ImageSubmission component with integrated Overlay
function ImageSubmission({ email, selectedCourse }) {
    const [submissionStatus, setSubmissionStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = () => {
        setSubmissionStatus('pending');

        fetch('http://localhost:3001/imageSubmission', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                name: selectedCourse.name,
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            setSubmissionStatus('success');
            setTimeout(() => setSubmissionStatus('idle'), 5000); // Keep success message longer to view animation
        })
        .catch(error => {
            console.error('Error:', error);
            setErrorMessage(error.message);
            setSubmissionStatus('error');
            setTimeout(() => setSubmissionStatus('idle'), 5000);
        });
    };

    return (
        <div>
            <button onClick = {handleSubmit} ontype="button" className="ml-4 my-8 px-6 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21,5H11.72l-.32-1A3,3,0,0,0,8.56,2H3A3,3,0,0,0,0,5V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V8A3,3,0,0,0,21,5Zm1,14a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H8.56a1,1,0,0,1,.95.68L10.28,7H21a1,1,0,0,1,1,1Z"></path><path d="M12.71,9.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L11,12.41V18a1,1,0,0,0,2,0V12.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>
                </svg>
                Submit
            </button>
            <Overlay show={submissionStatus !== 'idle'}>
                {submissionStatus === 'pending' && <p>Submitting...</p>}
                {submissionStatus === 'success' && (
                    <div style={{ color: 'green' }}>
                        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 52 52">
                            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                            <path className="checkmark-check" fill="none" stroke="#4CAF50" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                        Submitted Successfully!
                    </div>
                )}
                {submissionStatus === 'error' && <div style={{ color: 'red' }}>Error: {errorMessage}</div>}
            </Overlay>
        </div>
    );
}

export default ImageSubmission;
