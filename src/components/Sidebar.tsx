import React from 'react';
import NavBar from './NavBar'
import Selection from './Selection'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
      <div className="sidebar-container">
        <NavBar />
      </div>


    
    // <aside className='js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-lg navbar-bordered splitted-content-navbar'>
    //   <div className='navbar-vertical-container'>
    //     <div className='navbar-vertical-footer-offset'>
    //       <!-- Content -->
    //       <div className='navbar-vertical-content'>
    //         <!-- Mini Content -->
    //         <NavBar />
    //         <!-- End Mini Content -->
    //         <Selection/>
    //       </div>
    //       <!-- End Content -->
    //     </div>
    //   </div>
    // </aside>
  );
};

export default Sidebar;
