import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { TechStack } from '../models/tech-stack.interface';

@Injectable({
  providedIn: 'root',
})
export class TechStackDataService {
  constructor(private supabaseService: SupabaseService) {}

  getTechStack(): Observable<TechStack[]> {
    return from(this.supabaseService.getTechStack());
  }
}
