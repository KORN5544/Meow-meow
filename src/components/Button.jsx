import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <>
      <Link 
        to="/Products" 
        className="px-6 py-3 bg-yellow-950 text-white rounded-lg shadow-md hover:bg-yellow-700 transition duration-350"
      >
        รายการสินค้า
      </Link>
    </>
  );
};

export default Button;