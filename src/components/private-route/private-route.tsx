import { type ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  isAuthorized: boolean;
  children: ReactElement;
};

function PrivateRoute({ isAuthorized, children }: PrivateRouteProps) {
  return isAuthorized ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
