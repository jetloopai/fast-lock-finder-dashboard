-- Add 5-step job status values
ALTER TYPE job_status ADD VALUE IF NOT EXISTS 'pending';
ALTER TYPE job_status ADD VALUE IF NOT EXISTS 'assigned';
ALTER TYPE job_status ADD VALUE IF NOT EXISTS 'en_route';
ALTER TYPE job_status ADD VALUE IF NOT EXISTS 'arrived';
ALTER TYPE job_status ADD VALUE IF NOT EXISTS 'completed';

-- Change jobs default status to pending
ALTER TABLE public.jobs ALTER COLUMN status SET DEFAULT 'pending';

-- Add human-readable job number (auto-incrementing)
ALTER TABLE public.jobs ADD COLUMN IF NOT EXISTS job_number serial;

-- Add address and vehicle to leads (collected during IVR)
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS address text;
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS vehicle text;

-- Add role and escalation order to locksmiths
-- role: 'dispatcher' | 'technician'
-- escalation_priority: 0 = dispatcher, 1/2/3 = tech order
ALTER TABLE public.locksmiths ADD COLUMN IF NOT EXISTS role text DEFAULT 'technician';
ALTER TABLE public.locksmiths ADD COLUMN IF NOT EXISTS escalation_priority integer DEFAULT 99;

-- RLS policies for new columns are inherited from existing table policies
