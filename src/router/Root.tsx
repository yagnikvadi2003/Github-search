import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loading from '../container/common/Loading';

const UserSearch = React.lazy(() => import('../components/UserSearch'));

const Root: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div id='main'>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<UserSearch />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </React.Suspense>
      </div>
    </React.Fragment>
  );
};

export default Root;