-- Add performance indexes for better query optimization
create index if not exists idx_dispatch_codes_code on public.dispatch_codes(code);
create index if not exists idx_dispatch_codes_status_exp on public.dispatch_codes(status, expiration_time);
create index if not exists idx_leads_assigned_locksmith on public.leads(assigned_locksmith_id);
create index if not exists idx_call_logs_call_times on public.call_logs(start_time, end_time);

-- Create secure claim code function with row locking
create or replace function public.claim_code(p_code text, p_sid text, p_from text)
returns table(lead_phone text, locksmith_id uuid, lead_id uuid) 
language plpgsql security definer as $$
declare r record;
begin
  select * into r from public.dispatch_codes
  where code = p_code
    and status in ('new','in_progress')
    and (expiration_time is null or expiration_time > now())
  for update; -- lock the row

  if not found then 
    return;
  end if;

  update public.dispatch_codes
  set status = 'in_progress'
  where id = r.id;

  return query
    select l.phone, r.locksmith_id, r.lead_id
    from public.leads l
    where l.id = r.lead_id;
end$$;