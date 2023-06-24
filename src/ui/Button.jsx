import React from 'react';

function Button({ children, disabled, ...props }) {
  return (
    <button disabled={disabled} {...props}
      className="focus:oultine-none inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase
    text-stone-800 transition-colors duration-300 ease-in-out hover:bg-yellow-300 
    focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default Button;
