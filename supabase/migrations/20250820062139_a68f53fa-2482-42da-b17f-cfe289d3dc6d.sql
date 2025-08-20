-- ENUMS
create type job_status as enum ('in_progress','complete','missed');
create type lead_status as enum ('new','in_progress','complete','missed');
create type code_status as enum ('new','in_progress','complete','expired');
create type call_status as enum ('answered','missed','failed');

-- TABLES
create table public.locksmiths (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text unique not null,
  email text,
  default_cut_percent numeric default 60,
  assigned_zips text[] default '{}',
  active boolean default true,
  payment_method text,
  created_at timestamptz default now()
);

-- Enable RLS
ALTER TABLE public.locksmiths ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for locksmiths (for future authentication)
CREATE POLICY "Enable read access for all users" ON public.locksmiths FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON public.locksmiths FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users only" ON public.locksmiths FOR UPDATE USING (auth.role() = 'authenticated');

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text not null,
  service_type text,
  zip text,
  dispatch_code_id uuid,
  assigned_locksmith_id uuid references public.locksmiths(id),
  status lead_status default 'new',
  created_at timestamptz default now()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for leads
CREATE POLICY "Enable read access for all users" ON public.leads FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON public.leads FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users only" ON public.leads FOR UPDATE USING (auth.role() = 'authenticated');

create table public.dispatch_codes (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  lead_id uuid references public.leads(id) on delete cascade,
  locksmith_id uuid references public.locksmiths(id),
  status code_status default 'new',
  expiration_time timestamptz,
  created_at timestamptz default now()
);

-- Enable RLS
ALTER TABLE public.dispatch_codes ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for dispatch_codes
CREATE POLICY "Enable read access for all users" ON public.dispatch_codes FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON public.dispatch_codes FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users only" ON public.dispatch_codes FOR UPDATE USING (auth.role() = 'authenticated');

-- Add foreign key constraint from leads to dispatch_codes
alter table public.leads
  add constraint leads_dispatch_code_fk
  foreign key (dispatch_code_id) references public.dispatch_codes(id);

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid references public.leads(id) on delete set null,
  client_name text,
  job_type text,
  final_price numeric,
  locksmith_id uuid references public.locksmiths(id),
  your_cut numeric,
  their_cut numeric,
  status job_status default 'in_progress',
  completed_at timestamptz,
  created_at timestamptz default now()
);

-- Enable RLS
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for jobs
CREATE POLICY "Enable read access for all users" ON public.jobs FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON public.jobs FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users only" ON public.jobs FOR UPDATE USING (auth.role() = 'authenticated');

create table public.call_logs (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references public.jobs(id) on delete set null,
  start_time timestamptz,
  end_time timestamptz,
  duration_seconds integer,
  locksmith_id uuid references public.locksmiths(id),
  client_phone text,
  recording_url text,
  status call_status default 'answered',
  created_at timestamptz default now()
);

-- Enable RLS
ALTER TABLE public.call_logs ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for call_logs
CREATE POLICY "Enable read access for all users" ON public.call_logs FOR SELECT USING (true);
CREATE POLICY "Enable insert for authenticated users only" ON public.call_logs FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users only" ON public.call_logs FOR UPDATE USING (auth.role() = 'authenticated');