import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, ...props }) {
  const base =
    'focus:oultine-none text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase text-stone-800 tracking-wide transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'focus:oultine-none text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 ease-in-out hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 sm:px-6 sm:py-3.5',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} {...props} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
