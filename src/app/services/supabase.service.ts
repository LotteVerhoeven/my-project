import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { MarkerData } from '../models/marker-data.interface';

const SUPABASE_URL = 'https://adusubynxhbwbnxiusjk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkdXN1YnlueGhid2JueGl1c2prIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MTcwNDMsImV4cCI6MjA2NjA5MzA0M30.ZwC3syk3NZSOjZUybgzGFR6zWwF3mTy-vDJi08Y80BI';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    });
  }

  async getMarkers(): Promise<MarkerData[]> {
    const { data, error } = await this.supabase
      .from('markers')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    return data as MarkerData[];
  }

  async addMarker(marker: Omit<MarkerData, 'id'>): Promise<void> {
    const { error } = await this.supabase.from('markers').insert(marker);
    if (error) throw error;
  }

  async deleteMarker(id: number): Promise<void> {
    const { error } = await this.supabase.from('markers').delete().eq('id', id);
    if (error) throw error;
  }
}
