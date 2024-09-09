import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: '#099',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        color: '#fff',
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
