import React from 'react';
import './Navbar.css'

export const Navbar = () => {

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('e',e);
  };

  return (
    <div className="navbar-container">
        <div className='nav-bar-link'>Amazon.in</div>
        <div className='nav-bar-link'>address</div>
        <div id='search-bar-container'>
            <form onSubmit={handleSearch}>
                <select title='search in' id="search-select">
                    {/* <label></label> */}
                    <option>All</option>
                </select>
                <input id="search-bar" />
                <button type='submit' id="search-submit-btn">&#128269;</button>
            </form>
        </div>
        <div className='nav-bar-link'>nationality</div>
        <div className='nav-bar-link'>Sign In</div>
        <div className='nav-bar-link'>Returns & Orders</div>
        <div className='nav-bar-link'>Cart</div>
    </div>

  )
}
