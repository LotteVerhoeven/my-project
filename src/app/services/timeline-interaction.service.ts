import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineInteractionService {
  private selectedMarkerIdSubject = new BehaviorSubject<number | null>(null);
  
  constructor() { }

  selectMarker(markerId: number): void {
    this.selectedMarkerIdSubject.next(markerId);
  }

  getSelectedMarkerId(): Observable<number | null> {
    return this.selectedMarkerIdSubject.asObservable();
  }

  clearSelection(): void {
    this.selectedMarkerIdSubject.next(null);
  }
}
