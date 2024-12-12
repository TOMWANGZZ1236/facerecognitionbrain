import React from 'react';

function AddButton({onClick}) {
  const handleClick = () => {
    // console.log('Add icon clicked!');
    // Implement the functionality that should happen on click
  };

  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold mr-10 py-2 px-4 rounded-full"
      aria-label="Add">
      +
    </button>
  );
}

export default AddButton;
