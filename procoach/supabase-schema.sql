-- PROCOACH: archivio personale cloud
-- Eseguire una sola volta nel SQL Editor del proprio progetto Supabase.
-- Ogni account può leggere e modificare esclusivamente la propria riga.

create table if not exists public.procoach_user_data (
  user_id uuid primary key references auth.users (id) on delete cascade,
  payload jsonb not null default '{}'::jsonb
    check (jsonb_typeof(payload) = 'object'),
  updated_at timestamptz not null default now()
);

alter table public.procoach_user_data enable row level security;

-- Revoca i permessi predefiniti e concede solo CRUD agli utenti autenticati.
revoke all on table public.procoach_user_data from anon, authenticated;
grant select, insert, update, delete
  on table public.procoach_user_data to authenticated;

drop policy if exists "Procoach users read own archive" on public.procoach_user_data;
create policy "Procoach users read own archive"
  on public.procoach_user_data for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Procoach users create own archive" on public.procoach_user_data;
create policy "Procoach users create own archive"
  on public.procoach_user_data for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Procoach users update own archive" on public.procoach_user_data;
create policy "Procoach users update own archive"
  on public.procoach_user_data for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Procoach users delete own archive" on public.procoach_user_data;
create policy "Procoach users delete own archive"
  on public.procoach_user_data for delete to authenticated
  using ((select auth.uid()) = user_id);

comment on table public.procoach_user_data is
  'Private per-user PROCOACH archive payload; protected by row-level security.';
