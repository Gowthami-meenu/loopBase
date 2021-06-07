import React from 'react';

interface SelectionProps {}

const Selection: React.FC<SelectionProps> = () => {
  return (
    <div className="selection-container">
      <h2>Data Sources</h2>
      <ul className="dl-list">
        <li className="active">
          <div className="main-data">
          <a>Amplitude</a>
          <span>Add</span>
          </div>
          <ul className="sub-dl-list">
            <li>
              <a>Events</a>
            </li>
            <li><a>Properties</a>
            <ul className="sub-dl-list">
                  <li><a>Country</a></li>
                  <li><a>Email id</a></li>
                  <li><a>Number</a></li>
                  <li><a>Acq Source</a></li>
                </ul>
            </li>
          </ul>
        </li>
        <li>
        <div className="main-data">
          <a>Stripe</a>
          <span>add</span>
          </div>
          <ul className="sub-dl-list">
            <li><a>Events</a></li>
            <li><a>Properties</a></li>
          </ul>
        </li>
        <li>
        <div className="main-data">
          <a>Hubspot</a>
          <span>add</span>
          </div>
          <ul className="sub-dl-list">
            <li><a>Events</a></li>
            <li><a>Properties</a></li>
          </ul>
        </li>
        <li>
        <div className="main-data">
          <a>ZoomInfo</a>
          <span>add</span>
          </div>
          <ul className="sub-dl-list">
            <li><a>Events</a></li>
            <li><a>Properties</a></li>
          </ul>
        </li>
        <li>
        <div className="main-data">
          <a>Freshsales</a>
        <span>add</span>
        </div>
        <ul className="sub-dl-list">
            <li><a>Events</a></li>
            <li><a>Properties</a></li>
          </ul>
        </li>
      </ul>
     </div>
  );
};

export default Selection;
