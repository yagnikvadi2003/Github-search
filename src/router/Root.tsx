import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import UserSearch from '../components/UserSearch';

const Root: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div id='main'>
        <Routes>
          <Route path="/" element={<UserSearch />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default Root;