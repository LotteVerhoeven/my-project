import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { WorkExperience } from '../models/work-experience.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceDataService {
  constructor(private supabaseService: SupabaseService) {}

  getWorkExperience(): Observable<WorkExperience[]> {
    return from(this.supabaseService.getWorkExperience());
  }
}
