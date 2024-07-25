import React, { useState } from 'react';

// Define style objects
const styles = {
  button: {
    boxSizing: 'border-box',
    padding: '15px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: 600,
    fontSize: '16px',
    fontFamily: 'Menlo, Roboto Mono, monospace',
    backgroundColor: 'rgb(41, 41, 41)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s', // Transition for background and text color
    overflow: 'hidden',
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.137)',
    position: 'relative',
    outline: 'none',
    marginTop:"12px"
  },
  span: {
    letterSpacing: '.1rem',
    transition: 'color 0.3s', // Transition for text color
    position: 'relative',
    background: 'inherit',
  },
  hover: {
    backgroundColor: 'rgb(51, 51, 51)',
    color: '#FAC921', // Hover text color
  },
  animation: {
    position: 'absolute',
    content: '""',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'inherit',
    zIndex: -1,
    transition: 'opacity 0.3s', // Transition for opacity
  },
};


const AddButton = ({handelAddButton}) => {
  const [isHovered, setIsHovered] = useState(false);
   const testv=99;
  return (
    <button
      style={{
        ...styles.button,
        backgroundColor: isHovered ? styles.hover.backgroundColor : styles.button.backgroundColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        style={{
          ...styles.span,
          color: isHovered ? styles.hover.color : styles.button.color,
        }}

        onClick={handelAddButton}
      >
        Add Expense
        <div
          style={{
            ...styles.animation,
            opacity: isHovered ? 1 : 0, // Show or hide animation background
          }}
        />
      </span>
    </button>
  );
};

export default AddButton;
