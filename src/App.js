import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { QuickNav } from './Components/QuickNav/QuickNav';
import { Slides } from './Components/Slides/Slides';
import { Cards } from './Components/Cards/Cards';
import { Footer } from './Components/Footer/Footer';
import { useState } from 'react';
import { Sidebar } from './Components/SIdebar/SIdebar';

function App() {
    const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="App">
      {toggleSidebar && 
            <div className='side-bar-modal'>
                <Sidebar />
                <button onClick={() => setToggleSidebar(!toggleSidebar)}>X</button>
            </div>
      }
      {!toggleSidebar && 
      <>
        <Navbar />
        <QuickNav toggleSidebar = {toggleSidebar} setToggleSidebar = {setToggleSidebar} />
        <Slides />
        <Cards />
        <Footer />
      </>}
    </div>
  );
}

export default App;
