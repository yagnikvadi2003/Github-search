import React from 'react';
import { CardProps } from '../../@types/Type';

import Img from './Img';
import Button from './Button';

const Card: React.FC<CardProps> = ({ key, url, avatar, alt, className, children, ImageId, IconId, onClick }): JSX.Element => {
  return (
    <div className="card" key={key}>
      <Img src={avatar} alt={alt} ImageId={ImageId} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Button className={className} IconId={IconId} id='card-button'>
          {children}
        </Button>
      </a>
    </div>
  );
};

/**
 * Usage <Card text='something' avatarUrl='someThingURL' onclick={ClickEvent} />
**/

export default Card;