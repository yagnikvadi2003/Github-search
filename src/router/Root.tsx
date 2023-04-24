import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loading from '../container/common/Loading';

// Use the `lazy()` function to define the lazy loading of our component.
const UserSearch = React.lazy(() => import('../components/UserSearch'));

const Root: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <div id='main'>
        {/* Use the `Suspense` component to handle the loading of the lazy component. */}
        <React.Suspense fallback={<Loading />}>
          <Routes>
            {/* Render the lazy component using the standard JSX syntax. */}
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