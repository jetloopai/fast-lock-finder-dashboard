export type UserRole = 'owner' | 'dispatcher' | 'technician';

export interface Profile {
  id: string;
  name: string | null;
  email: string | null;
  role: UserRole;
  locksmith_id: string | null;
  created_at: string;
}
