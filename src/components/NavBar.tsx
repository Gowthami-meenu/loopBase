import React from 'react';

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
    <>  
      <a
        className='logo'
        href='#'
        aria-label='Front'
      >
       Logo
      </a>

      <ul className='menu-list'>
        {Navigation.map((item, index) => {
          return (
            <li className={`${item.active ? 'active' : ''}`} key={index} onClick={item.action}>
              <a >
                <i className={`tio-${item.icon}-outlined`}></i>
                <span>{item.title}</span>
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
    </>
  );
};

export default NavBar;
