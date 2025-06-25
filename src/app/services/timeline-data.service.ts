import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { SupabaseService } from './supabase.service';
import { TimelineItem } from '../models/timeline-item.interface';

export interface TimelineYear {
  year: number;
  items: TimelineItem[];
}

@Injectable({
  providedIn: 'root'
})
export class TimelineDataService {

  constructor(private supabaseService: SupabaseService) { }

  getTimelineItems(): Observable<TimelineItem[]> {
    return from(this.supabaseService.getTimelineItems()).pipe(
      map((items: TimelineItem[]) => items.sort((a: TimelineItem, b: TimelineItem) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()))
    );
  }

  getTimelineItemsByYear(): Observable<TimelineYear[]> {
    return this.getTimelineItems().pipe(
      map((items: TimelineItem[]) => {
        const yearGroups = new Map<number, TimelineItem[]>();
        
        items.forEach(item => {
          const year = new Date(item.date).getFullYear();
          if (!yearGroups.has(year)) {
            yearGroups.set(year, []);
          }
          yearGroups.get(year)!.push(item);
        });

        return Array.from(yearGroups.entries())
          .map(([year, items]) => ({ year, items }))
          .sort((a, b) => b.year - a.year); // Most recent year first
      })
    );
  }
}
