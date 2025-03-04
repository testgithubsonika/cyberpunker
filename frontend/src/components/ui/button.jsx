import React from "react";

const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
