import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { MarkerData } from '../models/marker-data.interface';
import { HobbyData } from '../models/hobby-data.interface';
import { TimelineItem } from '../models/timeline-item.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabase.url, environment.supabase.anonKey, {
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

  async getHobbies(): Promise<HobbyData[]> {
    const { data, error } = await this.supabase
      .from('hobbies')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;
    return data as HobbyData[];
  }

  async getTimelineItems(): Promise<TimelineItem[]> {
    const { data, error } = await this.supabase
      .from('timeline_items')
      .select('*')
      .order('date', { ascending: true });

    if (error) throw error;
    return data as TimelineItem[];
  }
}
