import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { SupabaseService } from './supabase.service';
import { TimelineItem } from '../models/timeline-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TimelineDataService {

  constructor(private supabaseService: SupabaseService) { }

  getTimelineItems(): Observable<TimelineItem[]> {
    return from(this.supabaseService.getTimelineItems()).pipe(
      map((items: TimelineItem[]) => items.sort((a: TimelineItem, b: TimelineItem) => 
        new Date(a.date).getTime() - new Date(b.date).getTime()))
    );
  }
}
