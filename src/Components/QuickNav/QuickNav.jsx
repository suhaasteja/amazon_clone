import React from 'react';
import './QuickNav.css';


const quickNavRecomends = ['Best Sellers', 'Todays deals', 'Mobiles', 'Customer Service', 'Books', 'Electronics', 'Prime', 'Fashion', 'New Releases'];

export const QuickNav = ({toggleSidebar, setToggleSidebar}) => {

    return (
        <>
            <div className='quick-nav-container'>
                <div className="quick-nav-element">
                    <button id='side-bar-icon' onClick={() => setToggleSidebar(!toggleSidebar)}>☰</button>
                </div>
                {
                    quickNavRecomends.map(r => <div key={r} className="quick-nav-element">{r}</div>)
                }
            </div>
        </>
    )
}
