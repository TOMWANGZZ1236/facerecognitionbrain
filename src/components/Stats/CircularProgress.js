import React, { useEffect, useState } from 'react';

const CircularProgress = ({ percentage }) => {
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const [progress, setProgress] = useState(0); // Start with 0 progress

  useEffect(() => {
    // Set the progress to fill up to the target percentage
    const progressTo = percentage / 100 * circumference;
    const increment = percentage > 0 ? Math.ceil(percentage / 50) : 0;
    
    const animateProgress = () => {
      setProgress((prevProgress) => {
        if (prevProgress < progressTo) {
          const update = Math.min(prevProgress + increment, progressTo);
          return update;
        }
        clearInterval(intervalId);
        return prevProgress;
      });
    };

    const intervalId = setInterval(animateProgress, 10);
    return () => clearInterval(intervalId);
  }, [percentage, circumference]);

  return (
    <div className="mt-4 flex justify-center items-center relative">
      <svg width="120" height="120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#eee"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="blue"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          transform="rotate(-90 60 60)"
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        />
      </svg>
      <div className="absolute text-lg font-semibold">
        {Math.round(progress / circumference * 100)}%
      </div>
    </div>
  );
};

export default CircularProgress;
