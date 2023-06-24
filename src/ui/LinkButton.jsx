import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LinkButton({ children, to, ...props }) {
const navigate = useNavigate();
const className = "text-sm text-blue-500 hover:text-blue-600"

  if (to === '-1')
    return <button className={className} onClick={() => navigate(-1)}>{children}</button>;

  return (
    <Link
      to={to}
      {...props}
      className={className}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
