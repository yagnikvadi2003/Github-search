import React from 'react';

import UserSearch from '../components/UserSearch';

const Root: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div id='main'>
        <UserSearch />
      </div>
    </React.Fragment>
  );
};

export default Root;