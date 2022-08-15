import React from 'react';
import './Sidebar.css';


const sidebarContent = [
    "Trending",
    "Best Sellers",
    "New Releases",
    "Movers and Shakers",
    "Digital Content And Devices",
    "Echo & Alexa",
    "Fire TV",
    "Kindle E-Readers & eBooks",
    "Audible Audiobooks",
    "Amazon Prime Video",
    "Amazon Prime Music",
    "Shop By Department",
    "Mobiles",
    " Computers",
    "TV",
    " Appliances",
    " Electronics",
    "Men's Fashion",
    "Women's Fashion",
    "See All",
    "Programs & Features",
    "Gift Cards & Mobile Recharges",
    "Flight Tickets",
    "#FoundItOnAmazon",
    "Clearance store",
    "Help & Settings",
    "Your Account",
    "Customer Service",
    "Sign In"
];

export const Sidebar = () => {
  return (
    <div className='side-bar-container'>
      <div className="sidebar-content" id="side-bar-hello-msg">
        Hello, User
      </div>
        {
            sidebarContent.map(c => <div key={c} className="sidebar-content">{c}</div>)
        }
    </div>
  )
}
