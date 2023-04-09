import React from 'react';

import Img from '../container/common/Img';
import Button from '../container/common/Button';

import { UserProfileProps } from '../@types/Type';

const UserProfile: React.FC<UserProfileProps> = ({ src, alt, id, dataExample,onClick }): JSX.Element => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <Img src={src} alt={alt} id={id as string} />
                    <Button text='Github' role="link" data-example={dataExample} className='card-button' onClick={onClick} />
                </div>
            </div>
        </React.Fragment>
    );
};

/**
 * Usage <UserProfile src='someUrl' alt='something' id='something' onClick={something Click Event} />
**/
export default UserProfile;