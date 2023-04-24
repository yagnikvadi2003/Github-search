import React from 'react';
import { CardProps } from '../../@types/Type';

import Img from './Img';
import Button from './Button';

const Card: React.FC<CardProps> = ({ key, avatar, alt, className, children, ImageId, IconId, onClick }): JSX.Element => {
  return (
    <div className="card" key={key}>
      <Img src={avatar} alt={alt} ImageId={ImageId} />
      <Button children={children} className={className} IconId={IconId} id='card-button' onClick={onClick} />
    </div>
  );
};

/**
 * Usage <Card text='something' avatarUrl='someThingURL' onclick={ClickEvent} />
**/

export default Card;