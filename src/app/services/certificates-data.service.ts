import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { Certificate } from '../models/certificates.interface';

@Injectable({
  providedIn: 'root',
})
export class CertificatesDataService {
  constructor(private supabaseService: SupabaseService) {}

  getCertificates(): Observable<Certificate[]> {
    return from(this.supabaseService.getCertificates());
  }
}
