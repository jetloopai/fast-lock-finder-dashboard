import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Profile } from '@/types/profiles';

export interface UseProfileReturn {
  profile: Profile | null;
  loading: boolean;
  isOwner: boolean;
  isDispatcher: boolean;
  isTechnician: boolean;
  refetch: () => void;
}

export function useProfile(): UseProfileReturn {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading]  = useState(true);

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { setLoading(false); return; }
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();
    setProfile(data as Profile | null);
    setLoading(false);
  }, []);

  useEffect(() => { fetchProfile(); }, [fetchProfile]);

  return {
    profile,
    loading,
    isOwner:      profile?.role === 'owner',
    isDispatcher: profile?.role === 'dispatcher',
    isTechnician: profile?.role === 'technician',
    refetch: fetchProfile,
  };
}
