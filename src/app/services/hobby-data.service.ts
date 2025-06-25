import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { HobbyData } from '../models/hobby-data.interface';

@Injectable({
  providedIn: 'root',
})
export class HobbyDataService {
  constructor(private supabaseService: SupabaseService) {}

  getHobbies(): Observable<HobbyData[]> {
    return from(this.supabaseService.getHobbies());
  }
}
