import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleMouseEnter = () => setIsModalVisible(true);

  const handleMouseLeave = () => setIsModalVisible(false);

  return (
    <header>
      <nav className='navbar__main-wrapper'>
        <a href='/#'>CompanyName</a>
        <div className='navbar__modal-wrapper'>         
          <button 
            className='navbar__modal--button'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          > 
            Features
          </button>
          {isModalVisible && (
            <div 
              className='navbar__modal--area'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <aside className='navbar__modal--features'>
                {new Array(10).fill(0).map((_, index) => (
                  <a key={index} href='/#'>
                    Feature #{index + 1}
                  </a>
                ))}
              </aside>
            </div>
          )}
        </div>
        <input aria-label='Search features' placeholder='Search features' />
        <a className='navbar__button' href='/#'>
          Log In
        </a>
        <a className='navbar__button' href='/#'>
          Sign Up
        </a>
      </nav>
    </header>
  );
};

export default Navbar;