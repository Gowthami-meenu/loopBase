import React from 'react';

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h6 className='card-subtitle'>Card subtitle</h6>
        <h3 className='card-title'>Card title</h3>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a className='card-link' href='#'>
          Card link
        </a>
        <a className='card-link' href='#'>
          Another link
        </a>
      </div>
    </div>
  );
};

export default Card;
