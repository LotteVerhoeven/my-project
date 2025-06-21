import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MarkerData } from '../models/marker-data.interface';

@Injectable({
  providedIn: 'root'
})
export class MarkerDataService {

  constructor() { }

  // Mock data - replace with actual API call
  getMarkerData(): Observable<MarkerData[]> {
    const mockData: MarkerData[] = [
      {
        id: 1,
        lng: 5.4697,
        lat: 51.4416,
        title: 'Eindhoven',
        place: 'Nederland',
        date: '15 juni 2025',
        description: 'Bezoek aan de technologie hub van Nederland. Prachtige moderne architectuur en innovatieve bedrijven.',
        imageUrl: 'https://source.unsplash.com/400x300/?eindhoven,technology'
      },
      {
        id: 2,
        lng: -0.1276,
        lat: 51.5074,
        title: 'London',
        place: 'United Kingdom',
        date: '18 juni 2025',
        description: 'Wandeling door het historische centrum van Londen. Bezocht de Tower Bridge en Borough Market.',
        imageUrl: 'https://source.unsplash.com/400x300/?london,city'
      },
      {
        id: 3,
        lng: 4.9041,
        lat: 52.3676,
        title: 'Amsterdam',
        place: 'Nederland',
        date: '20 juni 2025',
        description: 'Fietstocht door de grachten van Amsterdam. Bezocht het Rijksmuseum en Vondelpark.',
        imageUrl: 'https://source.unsplash.com/400x300/?amsterdam,canal'
      }
    ];

    return of(mockData);
  }

  // Method to get marker by ID (for future use)
  getMarkerById(id: number): Observable<MarkerData | undefined> {
    return new Observable(observer => {
      this.getMarkerData().subscribe(markers => {
        const marker = markers.find(m => m.id === id);
        observer.next(marker);
        observer.complete();
      });
    });
  }
}
