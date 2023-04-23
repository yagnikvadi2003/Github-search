import React from 'react';
import { CardTypes } from '../../@types/UnionTypes';

import Img from './Img';
import Button from './Button';

const Card: React.FC<CardTypes> = ({ key, avatar, className, children, ImageId, IconId, onClick }): JSX.Element => {
  return (
    <div className="card" key={key}>
      <Img src={avatar} alt="Profile" ImageId={ImageId} />
      <Button children={children} className={className} IconId={IconId} id='card-button' onClick={onClick}/>
    </div>
  );
};

/**
 * Usage <Card text='something' avatarUrl='someThingURL' onclick={ClickEvent} />
**/

export default Card;