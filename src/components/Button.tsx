import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'button', className = '' }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`py-2 px-4 bg-blue-500 text-white rounded transition duration-200 ease-in-out hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;