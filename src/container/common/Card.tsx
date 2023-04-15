import React from 'react';
import { CardProps } from '../../@types/Type';

import Img from './Img';
import Button from './Button';

const Card: React.FC<CardProps> = ({ avatarUrl, className, children, ImageId, IconId, onClick }): JSX.Element => {
  return (
    <div className="card">
      <Img src={avatarUrl} alt="Profile" ImageId={ImageId} />
      <Button children={children} className={className} IconId={IconId} id='card-button' onClick={onClick}/>
    </div>
  );
};

/**
 * Usage <Card text='something' avatarUrl='someThingURL' onclick={ClickEvent} />
**/

export default Card;