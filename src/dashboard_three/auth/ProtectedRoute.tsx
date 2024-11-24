import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { AdminType } from '../dashboard/types';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredAdminType?: AdminType[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredAdminType
}) => {
  const { isAuthenticated, adminType } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredAdminType && adminType && !requiredAdminType.includes(adminType)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};