import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Selection from './components/Selection';

function App() {
  return (
     <div className="app-container">
       <Sidebar />
       <Selection />
       <div className="main-container">
         <div className="main-content">
            <div className="equity-container">
              <h2>Qualify users between 2 and 5days of signup</h2>
            </div>
         </div>
         <div className="site-content">

         </div>
       </div>
     </div>
  );
}

export default App;
