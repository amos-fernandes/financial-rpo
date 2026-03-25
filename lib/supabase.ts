import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Sale {
  id: string;
  created_at: string;
  ebook_id: number;
  ebook_title: string;
  amount: number;
  buyer_name: string;
  buyer_phone: string;
  status: 'pending' | 'paid' | 'refunded';
}

export interface Post {
  id: string;
  created_at: string;
  content: string;
  type: 'feed' | 'story' | 'reels';
  status: 'draft' | 'scheduled' | 'published';
  scheduled_at: string | null;
  source: 'manual' | 'ai' | 'tweet_import';
}

export interface Lead {
  id: string;
  created_at: string;
  phone: string;
  name: string | null;
  source: string;
  status: 'new' | 'contacted' | 'converted';
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export async function getSales() {
  const { data, error } = await supabase
    .from('sales')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as Sale[];
}

export async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('scheduled_at', { ascending: true });
  if (error) throw error;
  return data as Post[];
}

export async function createPost(post: Partial<Post>) {
  const { data, error } = await supabase.from('posts').insert(post).select().single();
  if (error) throw error;
  return data as Post;
}
