import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Card from './components/Card';

function App() {
  return (
    <>
      <body className='has-navbar-vertical-aside navbar-vertical-aside-show-xl'>
        {/* <!-- ========== MAIN CONTENT ========== --> */}
        {/* <!-- Navbar Vertical --> */}
        <Sidebar />
        {/* <!-- End Navbar Vertical --> */}

        <main id='content' role='main' className='main splitted-content-main'>
          {/* <!-- Fluid Content --> */}
          <div className='splitted-content-fluid content-space'>
            {/* <!-- Toggle --> */}
            <div className='d-flex justify-content-end mt-3 mr-3'>
              {/* <!-- Navbar Vertical Toggle --> */}
              {/* @@include("@@autopath/partials/layouts-components/navbar-vertical-aside-toggle-ghost-secondary.html") */}
              {/* <!-- End Navbar Vertical Toggle --> */}
            </div>
            {/* <!-- End Toggle --> */}

            {/* <!-- Sidebar Detached Content --> */}
            <div className='sidebar-detached-content'>

              {/* <!-- Card --> */}
              <div className='card mb-3 mb-lg-5'>
                <div className='card-body card-body-centered py-10'>
                  <img
                    className='avatar avatar-xl mb-3'
                    src='@@autopath/assets/svg/illustrations/yelling.svg'
                    alt='Image Description'
                  />
                  <p className='card-text'>No data to show</p>
                  <a
                    className='btn btn-sm btn-white'
                    href='@@autopath/index.html'
                  >
                    Get Started
                  </a>
                </div>
              </div>
              {/* <!-- End Card --> */}

              {/* <!-- Card --> */}
              <div className='card'>
                <div className='card-body card-body-centered py-10'>
                  <img
                    className='avatar avatar-xl mb-3'
                    src='@@autopath/assets/svg/illustrations/yelling.svg'
                    alt='Image Description'
                  />
                  <p className='card-text'>No data to show</p>
                  <a
                    className='btn btn-sm btn-white'
                    href='@@autopath/index.html'
                  >
                    Get Started
                  </a>
                </div>
              </div>
              {/* <!-- End Card --> */}
            </div>
            {/* <!-- End Sidebar Detached Content --> */}
          </div>
          {/* <!-- End Fluid Content --> */}
        </main>
      </body>
    </>
  );
}

export default App;
