import React from 'react';

import Input from '../container/common/Input';
import Button from '../container/common/Button';

const UserSearch: React.FC = (): JSX.Element => {
  const [targetValue, setTargetValue] = React.useState<String | null>(null);

  /**
  * Here we restrict all handleClicks to be exclusively on 
  * HTMLButton Elements
  * 
  * We're using `MouseEvent` as type for the event.
  * with `HTMLButtonElement` as a type parameter.
  * It contains properties an event can have
  * and methods (such as `preventDefault` an others).
  * be fired on an HTML <button> element.
  **/
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    setTargetValue(targetValue);
    console.log("targetValue: ", targetValue);
  }

  return (
    <React.Fragment>
      <div className="userSearchMain">
        <div className='userSearchHeading'>GitHub User Search</div>
        <Input type='search' placeholder='Please Enter Here...!' className='userSearchInput' value={targetValue} onChange={(event)=>setTargetValue(event.target.value)} />
        <Button text='Search' className='userSearchButton' onClick={(event) =>handleClick(event)} />
      </div>
    </React.Fragment>
  );
};

export default UserSearch;