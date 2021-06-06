import React from 'react';
import logo from '../assets/svg/logos/logo-short.svg';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const Navigation = [
    {
      title: 'Home',
      action: () => {},
      icon: 'home-vs-1',
      active: true,
    },
    {
      title: 'Pages',
      action: () => {},
      icon: 'pages',
      active: false,
    },
    {
      title: 'Security',
      action: () => {},
      icon: 'lock',
      active: false,
    },
    {
      title: 'Visible',
      action: () => {},
      icon: 'visible',
      active: false,
    },
  ];
  return (
    <div className='splitted-content-mini navbar-dark h-100 py-2'>
      <a
        className='navbar-brand d-flex justify-content-center mb-3'
        href='#'
        aria-label='Front'
      >
        <img className='navbar-brand-logo-short' src={logo} alt='Logo' />
      </a>

      <ul className='nav nav-compact-icon nav-compact-icon-circle'>
        {Navigation.map((item, index) => {
          return (
            <li className='nav-item' key={index} onClick={item.action}>
              <a className={`nav-icon ${item.active ? 'active' : ''}`}>
                <i className={`tio-${item.icon}-outlined`}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='nav nav-compact-icon nav-compact-icon-circle mt-auto'>
        <li className='nav-item'>
          {/* @@include("../layouts-components/dropdown-user-splitted-content-down-left.html") */}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
