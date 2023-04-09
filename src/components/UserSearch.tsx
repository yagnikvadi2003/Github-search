import React from 'react';

import UserProfile from './UserProfile';

import Input from '../container/common/Input';
import Button from '../container/common/Button';

const UserSearch: React.FC = (): JSX.Element => {
  // 👇️ pass empty string as initial value
  const [targetValue, setTargetValue] = React.useState<String | null>('');

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

  const handleURLClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const example = event.currentTarget.getAttribute('dataExample');
    console.log("example", example);
  }

  /*
  * 👇️type assertion
  * ✅ value={targetValue as string}
  */
  return (
    <React.Fragment>
      <div className="userSearchMain">
        <div className='userSearchHeading'>GitHub User Search</div>
        <Input type='search' placeholder='Please Enter Here...!' className='userSearchInput' value={targetValue as string} onChange={(event)=>setTargetValue(event.target.value)} />
        <Button text='Search' className='userSearchButton' onClick={(event) => handleClick(event)} />
      </div>
      <UserProfile src="../assets/images/download.jpeg" alt="Github Profile Photo" dataExample="https://admin.finestardiamonds.com" onClick={handleURLClick} />
    </React.Fragment>
  );
};

export default UserSearch;