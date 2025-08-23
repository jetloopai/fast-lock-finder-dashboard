-- Fix function search path security issue
create or replace function public.claim_code(p_code text, p_sid text, p_from text)
returns table(lead_phone text, locksmith_id uuid, lead_id uuid) 
language plpgsql security definer
set search_path = public
as $$
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