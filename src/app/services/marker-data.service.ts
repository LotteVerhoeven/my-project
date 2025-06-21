import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { MarkerData } from '../models/marker-data.interface';
import { SupabaseService } from './supabase.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerDataService {

  constructor(private supabaseService: SupabaseService) { }

  getMarkerData(): Observable<MarkerData[]> {
    return from(this.supabaseService.getMarkers());
  }

  addMarker(marker: Omit<MarkerData, 'id'>): Observable<void> {
    return from(this.supabaseService.addMarker(marker));
  }

  deleteMarker(id: number): Observable<void> {
    return from(this.supabaseService.deleteMarker(id));
  }
}
