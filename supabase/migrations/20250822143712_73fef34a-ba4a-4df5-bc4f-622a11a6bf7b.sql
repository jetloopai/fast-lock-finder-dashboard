-- CRITICAL SECURITY FIX: Update RLS policies to require authentication
-- This stops all business data from being publicly accessible

-- Drop existing overly permissive SELECT policies
DROP POLICY IF EXISTS "Enable read access for all users" ON public.call_logs;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.dispatch_codes;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.jobs;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.leads;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.locksmiths;

-- Create secure SELECT policies that require authentication
CREATE POLICY "Enable read access for authenticated users only" 
ON public.call_logs 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for authenticated users only" 
ON public.dispatch_codes 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for authenticated users only" 
ON public.jobs 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for authenticated users only" 
ON public.leads 
FOR SELECT 
USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for authenticated users only" 
ON public.locksmiths 
FOR SELECT 
USING (auth.role() = 'authenticated');