import React from 'react';

interface SelectionProps {}

const Selection: React.FC<SelectionProps> = () => {
  return (
    <div>
      <ul className='navbar-nav navbar-nav-lg nav-tabs navbar-vertical-without-icons pt-2'>
        {/* <!-- Pages --> */}
        <li className='nav-item'>
          <small className='nav-subtitle text-truncate' title='Pages'>
            Data Sources
          </small>
        </li>
        <li className='navbar-vertical-aside-has-menu show'>
          <a
            className='js-navbar-vertical-aside-menu-link nav-link nav-link-toggle active'
            href='#'
          >
            <span
              className='navbar-vertical-aside-mini-mode-hidden-elements text-truncate'
              title='Pages'
            >
              Amplitude
            </span>
          </a>

          <ul className='js-navbar-vertical-aside-submenu nav nav-sub'>
            <li className='navbar-vertical-aside-has-menu show'>
              <a
                className='js-navbar-vertical-aside-menu-link nav-link nav-link-toggle'
                href='#'
              >
                <span className='tio-circle nav-indicator-icon'></span>
                <span className='text-truncate' title='Users'>
                  Properties
                </span>
              </a>

              <ul className='js-navbar-vertical-aside-submenu nav nav-sub'>
                <li className='nav-item'>
                  <a className='nav-link active' href='@@autopath/users.html'>
                    <span className='tio-circle-outlined nav-indicator-icon'></span>
                    <span className='text-truncate' title='Overview'>
                      Country
                    </span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className="nav-link @@if(link=='users-add-user.html'){active}"
                    href='@@autopath/users-add-user.html'
                  >
                    <span className='tio-circle-outlined nav-indicator-icon'></span>
                    <span className='text-truncate' title='Add User'>
                      Email Id{' '}
                      <span className='badge badge-warning badge-pill ml-1'>
                        Hot
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        {/* <!-- End Pages --> */}
      </ul>
    </div>
  );
};

export default Selection;
