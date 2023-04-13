import React from 'react';
import { CardProps } from '../../@types/Type';

import Img from './Img';
import Button from './Button';

const Card: React.FC<CardProps> = ({ text, avatarUrl, onClick }): JSX.Element => {
  return (
    <div className="card">
      <Img src={avatarUrl} alt="Profile" id='cardImage' />
      <Button text={text} className='card-button' onClick={onClick} />
    </div>
  );
};

/**
 * Usage <Card text='something' avatarUrl='someThingURL' onclick={ClickEvent} />
**/

export default Card;