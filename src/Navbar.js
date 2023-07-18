import React, { useState } from 'react';
import App from './App';

const Navbar = () => {
  const [logoutClicked, setLogoutClicked] = useState(false);

  const handlelogout = () => {
    setLogoutClicked(true);
  };

  if (logoutClicked) {
    return <App />;
  }
  return (
    <nav className="bg-gray-900 py-4 px-6 flex justify-between items-center">
      <div className="text-white text-xl font-bold">Eco Store</div>
      <div className="text-gray-300 flex items-center">
        <span className='font-bold'>Balance:&nbsp;</span> <span className='text-green-500 font-bold'>786</span>&nbsp;Eco coins
        <button className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handlelogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

