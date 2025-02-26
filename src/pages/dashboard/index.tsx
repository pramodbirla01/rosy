import ProtectedRoute from '@/components/auth/ProtectedRoute';
import DashboardComponent from '@/components/dashboard/Dashboard';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardComponent />
    </ProtectedRoute>
  );
}
