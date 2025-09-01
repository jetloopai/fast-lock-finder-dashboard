import { supabase } from '../integrations/supabase/client';

export { supabase };

export function publicFileUrl(bucket: string, path: string): string {
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}