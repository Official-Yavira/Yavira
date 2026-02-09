-- Schema Supabase (PostgreSQL) per community, leaderboard, shop, tornei.

create table profiles (
  id uuid primary key references auth.users on delete cascade,
  nickname text unique not null,
  avatar_url text,
  bio text,
  rank text default 'Rookie',
  elo_rating integer default 1200,
  referral_code text unique,
  created_at timestamp with time zone default now()
);

create table community_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references profiles(id) on delete cascade,
  content text not null,
  image_url text,
  created_at timestamp with time zone default now()
);

create table community_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references community_posts(id) on delete cascade,
  author_id uuid references profiles(id) on delete cascade,
  content text not null,
  created_at timestamp with time zone default now()
);

create table post_likes (
  post_id uuid references community_posts(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  created_at timestamp with time zone default now(),
  primary key (post_id, user_id)
);

create table leaderboard_entries (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete cascade,
  season text not null,
  mode text not null,
  score integer not null,
  kd numeric(4,2) not null,
  created_at timestamp with time zone default now()
);

create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price_cents integer not null,
  stripe_price_id text,
  type text not null,
  active boolean default true
);

create table coaching_sessions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references profiles(id) on delete cascade,
  scheduled_at timestamp with time zone not null,
  status text default 'booked',
  stripe_session_id text,
  created_at timestamp with time zone default now()
);

create table tournaments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  status text default 'upcoming',
  start_at timestamp with time zone,
  created_at timestamp with time zone default now()
);

create table tournament_matches (
  id uuid primary key default gen_random_uuid(),
  tournament_id uuid references tournaments(id) on delete cascade,
  round integer not null,
  player_a uuid references profiles(id),
  player_b uuid references profiles(id),
  winner uuid references profiles(id)
);
