import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useProfile } from "@/hooks/useProfile";
import type { UserRole } from "@/types/profiles";

interface RequireRoleProps {
  role: UserRole | UserRole[];
  children: ReactNode;
  fallback?: ReactNode;
}

export function RequireRole({ role, children, fallback }: RequireRoleProps) {
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  const allowed = Array.isArray(role)
    ? role.includes(profile?.role as UserRole)
    : profile?.role === role;

  if (!allowed) return fallback ? <>{fallback}</> : <Navigate to="/admin" replace />;
  return <>{children}</>;
}
