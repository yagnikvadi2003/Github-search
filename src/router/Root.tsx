import React from 'react';
import Button from '../container/common/Button';

const Root: React.FC = (): JSX.Element => {

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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event?.preventDefault();
    console.log("HELLO I AM HERE", event);
  }

  return (
    <React.Fragment>
      <div>Github User Name Search</div>
      <br />
      <Button text='Click Me ...!' onClick={handleClick}/>
    </React.Fragment>
  );
};

export default Root;