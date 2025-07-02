
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

export default function ProtectedRoute({ children, requiredRole = null, allowedRoles = [] }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please login to access this page');
    } else if (requiredRole && user?.role !== requiredRole) {
      toast.error('You do not have permission to access this page');
    } else if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
      toast.error('You do not have permission to access this page');
    }
  }, [isAuthenticated, user, requiredRole, allowedRoles]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
