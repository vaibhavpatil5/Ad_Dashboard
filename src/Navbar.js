import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center  bg-gray-300">
      <div className="text-[#323C46] text-xl font-semibold">
        <Link to="/" className="text-[#323C46] hover:text-gray-900">
          App Logo
        </Link>
      </div>

      <div className="space-x-4">
        <Link to="/dashboard" className="text-[#323C46] hover:text-gray-900">
          DASHBOARD
        </Link>
        <Link to="/createAd" className="text-[#323C46] hover:text-gray-900">
          CREATE ADS
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
